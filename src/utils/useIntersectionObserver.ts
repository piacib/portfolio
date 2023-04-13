import React, { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  threshold = 0.75
) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef<null | IntersectionObserver>(null);
  useEffect(() => {
    console.log("adding IntersectionObserver");

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      { threshold: threshold }
    );
  }, [threshold]);

  useEffect(() => {
    if (!observerRef.current) return;
    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (!observerRef.current) return;
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};

export default useIntersectionObserver;
