import React, { useEffect } from "react";
import "./App.css";
import "./normalize.css";
import Pokeball from "./assets/3.svg";
import Fish from "./assets/fish-svgrepo-com.svg";
import QuestionMark from "./assets/question-mark-svgrepo-com.svg";
import Weather from "./assets/weather-rain-svgrepo-com.svg";
import Timer from "./assets/timer-svgrepo-com.svg";
import Linkedin from "./assets/linkedin-svgrepo-com.svg";
import Resume from "./assets/resume-svgrepo-com.svg";
import { keepTheme } from "./utils/theme";
import Toggle from "./components/Toggle/Toggle";
import FerrisWheel from "./components/FerrisWheel/FerrisWheel";

const dataArray = [
  { imageSrc: QuestionMark, imageAlt: "question mark", text: "About Me" },
  { imageSrc: Pokeball, imageAlt: "pokeball", text: "Pokemon Extension" },
  { imageSrc: Weather, imageAlt: "storm cloud", text: "Weather" },
  { imageSrc: Fish, imageAlt: "fish", text: "Fish" },
  { imageSrc: Timer, imageAlt: "timer", text: "Reddit Post Timer" },
  { imageSrc: Linkedin, imageAlt: "lnkedin", text: "Linkedin" },
  { imageSrc: Resume, imageAlt: "resume", text: "text" },
  { imageSrc: Pokeball, imageAlt: "", text: "this site!" },
];
function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <div className="App">
      <Toggle />
      <FerrisWheel dataArray={dataArray} />
    </div>
  );
}

export default App;
