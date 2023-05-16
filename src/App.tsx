import React from "react";
// import "./App.css";
import "./app.scss";
import "./normalize.css";
import "./fonts.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import LoadScreen from "./components/PageLoadAnimation/LoadScreen";

function App() {
  return (
    <>
      <LoadScreen />
      <Home />

      <AboutMe />
      <Projects />
    </>
  );
}
export default App;
