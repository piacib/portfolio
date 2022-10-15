import React, { useEffect } from "react";
import "./App.css";
import "./normalize.css";
import { keepTheme } from "./utils/theme";
import FerrisWheel from "./components/FerrisWheel/FerrisWheel";
import Toggle from "./components/Toggle/Toggle";
import Grass from "./components/Grass/Grass";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
// import "./starParrallax.css";
import "./star.css";
const StarBackground = () => {
  let stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push(
      <div
        key={i}
        style={{
          top: `${Math.random() * 2000}px`,
          left: `${Math.random() * 2000}px`,
        }}
        className="star"
      ></div>
    );
  }
  return (
    <div className="star_container">
      <div className='star_sheet' id="stars1"></div>
      <div className='star_sheet' id="stars2"></div>
      <div className='star_sheet' id="stars3"></div>
    </div>
  );
};
function App() {
  useEffect(() => {
    keepTheme();
  });
  return (
    <>
      <section id="home">
        <StarBackground />
        <Toggle />
        <FerrisWheel />
      </section>
      <AboutMe />
      <Projects />
      {/* <Grass /> */}
    </>
  );
}

export default App;
