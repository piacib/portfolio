import React, { useEffect, useState } from "react";
import "./App.css";
import "./normalize.css";
import "./fonts.css";
import { keepTheme, getTheme } from "./utils/theme";
import FerrisWheel from "./components/FerrisWheel/FerrisWheel";
import Toggle from "./components/Toggle/Toggle";
import Grass from "./components/Grass/Grass";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import { setTheme } from "./utils/theme";

// import "./starParrallax.css";
import "./star.css";
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
const StarBackground = () => {
  return (
    <div className="star_container">
      <div className="star_sheet" id="stars1"></div>
      <div className="star_sheet" id="stars2"></div>
      <div className="star_sheet" id="stars3"></div>
    </div>
  );
};
const DayBackground = () => {
  return (
    <>
      <Grass />
    </>
  );
};
interface Props {
  togClass: string;
}
const ThemeBackgroundToggle: React.FC<Props> = ({ togClass }) => {
  return togClass === "light" ? <DayBackground /> : <StarBackground />;
};
function App() {
  const { togClass, handleChange } = useMode();
  return (
    <>
      <section id="home">
        <ThemeBackgroundToggle togClass={togClass} />
        <Toggle togClass={togClass} handleChange={handleChange} />
        <FerrisWheel />
      </section>
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
