import { useEffect } from "react";
import { useSessionStorage } from "./useSessionStorage";
import variables from "../components/PageLoadAnimation/style.module.scss";
import useHtmlAndBodyClass from "./useHtmlClass";
const initialLoadClassName = "initial-animate";
const useInitialPageLoad = () => {
  const [loaded, setLoaded] = useSessionStorage("loaded", false);
  useHtmlAndBodyClass(loaded ? undefined : "initial-animate-overflow");
  const animationTimeSeconds = Number(
    variables.totalAnimationTime.slice(0, -1)
  );
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
