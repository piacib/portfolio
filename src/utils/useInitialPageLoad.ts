import { useEffect } from "react";
import { useSessionStorage } from "./useSessionStorage";
import variables from "../components/PageLoadAnimation/style.module.scss";
import useHtmlAndBodyClass from "./useHtmlClass";
const initialLoadClassName = "initial-animate";
const animationTimeSeconds = Number(variables.totalAnimationTime.slice(0, -1));
const useInitialPageLoad = () => {
  const [loaded, setLoaded] = useSessionStorage(
    "loaded",
    prefersReducedMotion()
  );
  const className = () => {
    if (prefersReducedMotion()) {
      return undefined;
    }
    return loaded ? undefined : "initial-animate-overflow";
  };
  useHtmlAndBodyClass(className());

  const animationTimeDelay = animationTimeSeconds * 1000;
  useEffect(() => {
    if (!loaded) {
      setTimeout(() => {
        setLoaded(true);
      }, animationTimeDelay);
    }
  }, [animationTimeDelay, loaded, setLoaded]);
  return { loaded, initialLoadClassName };
};

export default useInitialPageLoad;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion)").matches;
