import { ProjectType } from "./types";

import { WheelData } from "./types";

export const ProjectSectionId = "projects";
export const AboutMeSectionId = "about_me";
export const projects: ProjectType[] = [
  {
    repoHref: "https://github.com/piacib/pokeinfo",
    demoHref: "https://piacib.github.io/pokeinfo/",
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
    text: "Weather",
    backgroundColor: "green",
    skills: ["Typescript", "Api requests", "Error Handling"],
  },
  {
    href: `#${ProjectSectionId}`,
    repoHref: "https://github.com/piacib/hawaiian-fish",
    demoHref: "https://github.com/piacib/hawaiian-fish",
    text: "World Map",
    backgroundColor: "pink",
    skills: ["SVG", "local storage", "display", "css"],
  },
  {
    href: `#${ProjectSectionId}`,
    repoHref: "https://github.com/piacib/reddit-timer-piacib",
    demoHref: "https://github.com/piacib/reddit-timer-piacib",
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
    text: "this site!",
    backgroundColor: "orange",
    skills: ["CSS Variables", "Responsive Design", "Mobile Design"],
  },
];
export const dataArray: WheelData[] = [
  {
    repoHref: "",
    demoHref: "",
    text: "About Me",
    backgroundColor: "blue",
    href: `#${AboutMeSectionId}`,
  },
  {
    repoHref: "",
    demoHref: "",
    text: "Resume",
    href: `#${AboutMeSectionId}`,
  },
  {
    repoHref: "",
    demoHref: "",
    text: "Linkedin",
    href: "",
  },
  ...projects,
];

const projectsTest = [
  {
    repoHref: "https://github.com/piacib/pokeinfo",
    demoHref: "https://piacib.github.io/pokeinfo/",
    text: "Pokemon Extension",
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
    text: "Weather",
    skills: ["Typescript", "Api requests", "Error Handling"],
  },
  {
    repoHref: "https://github.com/piacib/hawaiian-fish",
    demoHref: "https://github.com/piacib/hawaiian-fish",
    text: "World Map",
    skills: ["SVG", "local storage", "display", "css"],
  },
  {
    repoHref: "https://github.com/piacib/reddit-timer-piacib",
    demoHref: "https://github.com/piacib/reddit-timer-piacib",
    text: "Reddit Post Timer",
    skills: [
      "React Testing",
      "Following an established Design",
      "Api Requests",
    ],
  },
  {
    repoHref: "https://github.com/piacib/",
    demoHref: "https://github.com/piacib/",
    text: "this site!",
    skills: [
      "CSS Variables",
      "Responsive Design",
      "Mobile Design",
      "CSS Animations",
    ],
  },
];
