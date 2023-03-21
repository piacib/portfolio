import React from "react";
import "./App.css";
import "./normalize.css";
import "./fonts.css";
import "./home.css";
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
        <header>
          <Toggle togClass={togClass} handleChange={handleChange} />
        </header>
        {/* <Background togClass={togClass} /> */}
        <div className="home_text_container">
          <h2>Hi my name is,</h2>
          <h1>Ben Piacitelli</h1>
          <h2>I am a front end web developer</h2>
        </div>
        <FerrisWheel />
      </section>
      {/* <AboutMe /> */}
      {/* <Projects /> */}
    </>
  );
}

export default App;
