import { useEffect } from "react";

const addHtmlClass = (className: string) => {
  document.getElementsByTagName("html")[0].classList.add(className);
};
const removeHtmlClass = (className: string) =>
  document.getElementsByTagName("html")[0].classList.remove(className);

export default function useHtmlClass(className?: string) {
  useEffect(() => {
    if (!className) {
      return;
    }
    addHtmlClass(className);

    // Clean up
    return () => {
      removeHtmlClass(className);
    };
  }, [className]);
}
