import { ProjectType } from "./types";
import Pokeball from "./assets/pokeball-svgrepo-com.svg";
import Weather from "./assets/weather-rain-svgrepo-com.svg";
import Timer from "./assets/timer-svgrepo-com.svg";
import WorldMap from "./assets/world-svgrepo-com.svg";
import Portfolio from "./assets/portfolio-svgrepo-com.svg";
import QuestionMark from "./assets/question-mark-svgrepo-com.svg";
import Resume from "./assets/resume-svgrepo-com.svg";
import Linkedin from "./assets/linkedin-svgrepo-com.svg";
import { WheelData } from "./types";
export const ProjectSectionId = "projects";
export const AboutMeSectionId = "about_me";
export const projects: ProjectType[] = [
  {
    repoHref: "https://github.com/piacib/pokeinfo",
    demoHref: "https://piacib.github.io/pokeinfo/",
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
    href: `#${ProjectSectionId}`,
  },
  {
    href: `#${ProjectSectionId}`,
    repoHref: "https://github.com/piacib/weather_typescript_app",
    demoHref: "https://github.com/piacib/weather_typescript_app",
    imageSrc: Weather,
    imageAlt: "storm cloud",
    text: "Weather",
    backgroundColor: "green",
    skills: ["Typescript", "Api requests", "Error Handling"],
  },
  {
    href: `#${ProjectSectionId}`,
    repoHref: "https://github.com/piacib/hawaiian-fish",
    demoHref: "https://github.com/piacib/hawaiian-fish",
    imageSrc: WorldMap,
    imageAlt: "world Map",
    text: "World Map",
    backgroundColor: "pink",
    skills: ["SVG", "local storage", "display", "css"],
  },
  {
    href: `#${ProjectSectionId}`,
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
    href: `#${ProjectSectionId}`,
    repoHref: "https://github.com/piacib/",
    demoHref: "https://github.com/piacib/",
    imageSrc: Portfolio,
    imageAlt: "",
    text: "this site!",
    backgroundColor: "orange",
    skills: ["CSS Variables", "Responsive Design", "Mobile Design"],
  },
];
export const dataArray: WheelData[] = [
  {
    repoHref: "",
    demoHref: "",
    imageSrc: QuestionMark,
    imageAlt: "question mark",
    text: "About Me",
    backgroundColor: "blue",
    href: `#${AboutMeSectionId}`,
  },
  {
    repoHref: "",
    demoHref: "",
    imageSrc: Resume,
    imageAlt: "resume",
    text: "Resume",
    href: `#${AboutMeSectionId}`,
  },
  {
    repoHref: "",
    demoHref: "",
    imageSrc: Linkedin,
    imageAlt: "linkedin",
    text: "Linkedin",
    href: "https//:www.linkedin.com/in/ben-piacitelli-325436212",
  },
  ...projects,
];
