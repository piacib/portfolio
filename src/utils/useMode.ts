import { useEffect, useState } from "react";
import { keepTheme, setTheme } from "./theme";

export const useMode = () => {
  const [togClass, setTogClass] = useState<"dark" | "light">("dark");
  useEffect(() => {
    keepTheme();
  });
  let theme = localStorage.getItem("theme");
  // check local storage for preferred theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);
  // toggle themes
  const handleChange = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };
  const themeObserver = () => {
    window.addEventListener("storage", () => {
      const theme = localStorage.getItem("theme");
      console.log(theme);
    });
    return togClass;
  };
  return { togClass, setTogClass, handleChange, themeObserver };
};
