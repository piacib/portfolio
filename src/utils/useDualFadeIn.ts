import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
const fadeInLeft = "fadeInLeft";
const fadeInRight = "fadeInRight";

const useDualFadeIn = () => {
  const [classes, setClasses] = useState({
    left: "intersection_observer_prestate",
    right: "intersection_observer_prestate",
  });
  const containerRef = useRef(null);
  const isOnScreen = useIntersectionObserver(containerRef);
  useEffect(() => {
    if (isOnScreen) {
      setClasses({
        left: fadeInLeft,
        right: fadeInRight,
      });
    }
  }, [isOnScreen]);

  return { classes, containerRef };
};
export default useDualFadeIn;
