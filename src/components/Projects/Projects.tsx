import React from "react";
// import "./Projects.css";
import { ProjectType } from "../../types";
import { projects, ProjectSectionId } from "../../global";
import "./projects.scss";
import pokeInfo from "../../assets/sample_pokeInfo.png";
interface Props {
  project: ProjectType;
  children?: React.ReactNode;
}
interface ProjectContent {
  title: string;
  text: string;
  imgLink: string;
  demoHref: string;
  repoHref: string;
  skillsClassNames: string[];
}
enum Direction {
  Right,
  Left,
}
const Showdown_Extension = {
  repoHref: "https://github.com/piacib/pokeinfo_iframe_extension",
  demoHref:
    "https://chrome.google.com/webstore/detail/pokeinfo-extension/plolbicmjndjpglocmmgnbppgnadmlfb?hl=en&authuser=0",
};
const Pokeinfo = {
  repoHref: "https://github.com/piacib/pokeinfo",
  demoHref: "https://piacib.github.io/pokeinfo/",
};
const Portfolio = {
  repoHref: "https://github.com/piacib/portfolio",
  demoHref: "https://piacib.github.io/portfolio/",
};

const World_Map = {
  repoHref: "https://github.com/piacib/world-map",
  demoHref: "https://piacib.github.io/world-map/",
};
const Weather_App = {
  repoHref: "https://github.com/piacib/weather_typescript_app",
};

const Projects = () => {
  return (
    <section id={ProjectSectionId}>
      <h1>Projects</h1>
      <ul className="card_container">
        <ProjectCard direction={Direction.Left} />
        <ProjectCard direction={Direction.Left} />
        <ProjectCard direction={Direction.Left} />
        {/* <li id="PokeInfo" className="card">
          <h2>PokeInfo</h2>
          <p>
            A project that connects to an active pokemon showdown battle via a
            websocket connection and displays real time information about the
            battle
          </p>
          <h3>Skills</h3>
          <ul>
            <li>web sockets</li>
            <li>api fetching</li>
            <li>Error handling</li>
          </ul>
          <div className="project_links">
            <a className="current_projects_btn" href={Pokeinfo.repoHref}>
              Repo
            </a>
            <a className="current_projects_btn" href={Pokeinfo.demoHref}>
              Site
            </a>
          </div>
        </li>
        <li id="Reddit_Timer_App" className="card">
          <h2>Reddit Timer App</h2>
          <p>
            Reddit Timer App is an app that suggests the optimal time to make a
            post on a specified subreddit. It fetches data from the reddit api
            and tracks top posts' submission times and displays the data.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>Developing a site from a figma design</li>
            <li>api fetching</li>
            <li></li>
          </ul>
          <div className="project_links">
            <a
              className="current_projects_btn"
              href={Showdown_Extension.repoHref}
            >
              Repo
            </a>
            <a
              className="current_projects_btn"
              href={Showdown_Extension.demoHref}
            >
              Site
            </a>
          </div>
        </li>
        <li id="Portfolio" className="card">
          <h2>This Site</h2>
          <p>
            My portfolio site is designed to showcase my talents. It utilizes
            custom css for all its animations
          </p>
          <h3>Skills</h3>
          <ul>
            <li>CSS Variables</li>
            <li>CSS Animations</li>
            <li></li>
          </ul>
          <div className="project_links">
            <a className="current_projects_btn" href={Portfolio.repoHref}>
              Repo
            </a>
            <a className="current_projects_btn" href={Portfolio.demoHref}>
              Site
            </a>
          </div>
        </li>
        <li id="World_Map" className="card">
          <h2>World Map</h2>
          <p>
            World map is a quiz game to help learn all of the countries in the
            world. It uses a large interactive world map svg to explore to globe
            and test your knowledge.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>SVG manipulation</li>
            <li>Local storage</li>
            <li>Touch Screen capability</li>
          </ul>
          <div className="project_links">
            <a className="current_projects_btn" href={World_Map.repoHref}>
              Repo
            </a>
            <a className="current_projects_btn" href={World_Map.demoHref}>
              Site
            </a>
          </div>
        </li> */}
      </ul>

      {/* <a
        className="current_projects_btn"
        role="button"
        href="https://github.com/piacib/EzraKleinBooks"
      >
        Checkout What I am Working On Now!
      </a> */}
    </section>
  );
};

export default Projects;
interface CardProps {
  direction: Direction;
}
const ProjectCard = ({ direction }: CardProps) => {
  return (
    <li id="Pokemon_Showdown_Extension" className="card">
      <div className="project_content">
        <h2>Pokemon Showdown Extension</h2>
        <p>
          A chrome Extension that adds an iframe when a new battle starts and
          sends data from the battle to my pokeinfo site to be displayed A
          chrome Extension that adds an iframe when a new battle starts and
          sends data from the battle to my pokeinfo site to be displayed A
          chrome Extension that adds an iframe when a new battle starts and
          sends data from the battle to my pokeinfo site to be displayed
        </p>
        <ul className="skills_list">
          <li>
            <i className="skills_icon devicon-javascript-plain"></i>
          </li>
          <li>
            <i className="skills_icon devicon-html5-plain-wordmark"></i>
          </li>

          <li>
            <i className="skills_icon devicon-react-original"></i>
          </li>

          <li>
            <i className="skills_icon devicon-sass-original"></i>
          </li>
          <li>
            <i className="devicon-chrome-plain-wordmark"></i>
          </li>
        </ul>
        <div className="small_screen_btn_container">
          <a
            className="button-85 projects_btn repo"
            href={Showdown_Extension.repoHref}
          >
            Repo
          </a>
          <a className="projects_btn demo" href={Showdown_Extension.demoHref}>
            Site
          </a>
        </div>
      </div>
      <div className="image_link_container">
        {/* <div className="triangle left" />
        <div className="triangle right " />
        <a
          className="button-85 projects_btn repo"
          href={Showdown_Extension.repoHref}
        >
          Repo
        </a>
        <a className="projects_btn demo" href={Showdown_Extension.demoHref}>
          Site
        </a> */}
      </div>
    </li>
  );
};
