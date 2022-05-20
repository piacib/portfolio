import React, { useEffect } from "react";
import "./App.css";
import "./normalize.css";
import Pokeball from "./assets/pokeball-svgrepo-com.svg";
import Fish from "./assets/fish-svgrepo-com.svg";
import QuestionMark from "./assets/question-mark-svgrepo-com.svg";
import Weather from "./assets/weather-rain-svgrepo-com.svg";
import Timer from "./assets/timer-svgrepo-com.svg";
import Linkedin from "./assets/linkedin-svgrepo-com.svg";
import Resume from "./assets/resume-svgrepo-com.svg";
import { keepTheme } from "./utils/theme";
import Toggle from "./components/Toggle/Toggle";
import FerrisWheel, { Passengers } from "./components/FerrisWheel/FerrisWheel";

const dataArray: Passengers[] = [
  {
    repoHref: "",
    demoHref: "",
    imageSrc: QuestionMark,
    imageAlt: "question mark",
    text: "About Me",
  },
  {
    repoHref: "https://github.com/piacib/pokemon-showdown-extension",
    demoHref: "",
    imageSrc: Pokeball,
    imageAlt: "pokeball",
    text: "Pokemon Extension",
  },
  {
    repoHref: "https://github.com/piacib/weather_typescript_app",
    demoHref: "",
    imageSrc: Weather,
    imageAlt: "storm cloud",
    text: "Weather",
  },
  {
    repoHref: "https://github.com/piacib/hawaiian-fish",
    demoHref: "",
    imageSrc: Fish,
    imageAlt: "fish",
    text: "Fish",
  },
  {
    repoHref: "https://github.com/piacib/reddit-timer-piacib",
    demoHref: "",
    imageSrc: Timer,
    imageAlt: "timer",
    text: "Reddit Post Timer",
  },
  {
    repoHref: "",
    demoHref: "",
    imageSrc: Linkedin,
    imageAlt: "linkedin",
    text: "Linkedin",
  },
  {
    repoHref: "",
    demoHref: "",
    imageSrc: Resume,
    imageAlt: "resume",
    text: "Resume",
  },
  {
    repoHref: "",
    demoHref: "",
    imageSrc: Pokeball,
    imageAlt: "",
    text: "this site!",
  },
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
