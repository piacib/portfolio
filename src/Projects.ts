import { ProjectType } from "./types";
import Pokeball from "./assets/pokeball-svgrepo-com.svg";
import Weather from "./assets/weather-rain-svgrepo-com.svg";
import Timer from "./assets/timer-svgrepo-com.svg";

export const projects: ProjectType[] = [
  {
    repoHref: "https://github.com/piacib/pokemon-showdown-extension",
    demoHref: "https://github.com/piacib/pokemon-showdown-extension",
    imageSrc: Pokeball,
    imageAlt: "pokeball",
    text: "Pokemon Extension",
    backgroundColor: "blue",
    skills: [
      "Chrome Extension",
      "Responsive design",
      "Api requests",
      "code splitting",
    ],
  },
  {
    repoHref: "https://github.com/piacib/weather_typescript_app",
    demoHref: "https://github.com/piacib/weather_typescript_app",
    imageSrc: Weather,
    imageAlt: "storm cloud",
    text: "Weather",
    backgroundColor: "green",
    skills: ["Typescript", "Api requests", "Error Handling"],
  },
  {
    repoHref: "https://github.com/piacib/hawaiian-fish",
    demoHref: "https://github.com/piacib/hawaiian-fish",
    imageSrc: " ",
    imageAlt: "world Map",
    text: "World Map",
    backgroundColor: "pink",
    skills: ["SVG", "local storage", "display", "css"],
  },
  {
    repoHref: "https://github.com/piacib/reddit-timer-piacib",
    demoHref: "https://github.com/piacib/reddit-timer-piacib",
    imageSrc: Timer,
    imageAlt: "timer",
    text: "Reddit Post Timer",
    backgroundColor: "teal",
    skills: [
      "React Testing",
      "Following an established Design",
      "Api Requests",
    ],
  },
  {
    repoHref: "https://github.com/piacib/",
    demoHref: "https://github.com/piacib/",
    imageSrc: "",
    imageAlt: "",
    text: "this site!",
    backgroundColor: "orange",
    skills: ["CSS Variables", "Responsive Design", "Mobile Design"],
  },
];
