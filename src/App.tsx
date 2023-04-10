import React from "react";
// import "./App.css";
import "./app.scss";
import "./normalize.css";
import "./fonts.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import LoadScreen from "./components/PageLoadAnimation/LoadScreen";
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
function App() {
  return (
    <>
      <Home>
        <LoadScreen />
      </Home>
      <AboutMe />

      <Projects />
    </>
  );
}
export default App;
