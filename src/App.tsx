import React from "react";
import "./App.css";
import "./normalize.css";
import "./fonts.css";
import FerrisWheel from "./components/FerrisWheel/FerrisWheel";
import Toggle from "./components/Toggle/Toggle";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import { useMode } from "./utils/useMode";
// import "./starParrallax.css";
import "./star.css";
import { Background } from "./components/Background/Background";
function App() {
  const { togClass, handleChange } = useMode();
  return (
    <>
      <section id="home">
        {/* <Background togClass={togClass} /> */}
        <Toggle togClass={togClass} handleChange={handleChange} />
        <FerrisWheel />
      </section>
      <AboutMe />
      {/* <Projects /> */}
    </>
  );
}

export default App;
