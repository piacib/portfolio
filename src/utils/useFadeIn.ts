import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

const fadeClass = "fade";
const prestate = "intersection_observer_prestate";

const fade = {
  left: `${fadeClass} fadeInLeft `,
  right: `${fadeClass} fadeInRight `,
  top: `${fadeClass} fadeInTop `,
  bottom: `${fadeClass} fadeInBottom `,
};
const useFadeIn = () => {
  const [classes, setClasses] = useState({
    left: prestate,
    right: prestate,
    top: prestate,
    bottom: prestate,
  });
  const containerRef = useRef(null);
  const isOnScreen = useIntersectionObserver(containerRef);
  useEffect(() => {
    if (isOnScreen) {
      setClasses({
        left: fade.left,
        right: fade.right,
        top: fade.top,
        bottom: fade.bottom,
      });
    }
  }, [isOnScreen]);

  return { classes, containerRef };
};
export default useFadeIn;
