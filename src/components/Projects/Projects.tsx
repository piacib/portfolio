import React from "react";
import "./Projects.css";
import { ProjectType } from "../../types";
import { projects, ProjectSectionId } from "../../global";

interface Props {
  project: ProjectType;
  children?: React.ReactNode;
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
      <div className="card_container">
        <div id="Pokemon_Showdown_Extension" className="card">
          <h2>Pokemon Showdown Extension</h2>
          <p>
            A chrome Extension that adds an iframe when a new battle starts and
            sends data from the battle to my pokeinfo site to be displayed
          </p>
          <h3>Skills</h3>
          <ul>
            <li>Extension Development</li>
            <li>Web Scraping</li>
            <li>Sending data over http</li>
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
        </div>
        <div id="PokeInfo" className="card">
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
        </div>
        <div id="Reddit_Timer_App" className="card">
          <h2>Reddit Timer App</h2>
          <p></p>
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
        </div>
        <div id="Portfolio" className="card">
          <h2>This Site</h2>
          <p></p>
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
        </div>
        <div id="World_Map" className="card">
          <h2>World Map</h2>
          <p>
            World map quiz website that utilizes local storage to store data
          </p>
          <h3>Skills</h3>
          <ul>
            <li>SVG manipulation</li>
            <li>Local storage</li>
            <li></li>
          </ul>
          <div className="project_links">
            <a className="current_projects_btn" href={World_Map.repoHref}>
              Repo
            </a>
            <a className="current_projects_btn" href={World_Map.demoHref}>
              Site
            </a>
          </div>
        </div>
      </div>

      <a
        className="current_projects_btn"
        role="button"
        href="https://github.com/piacib/EzraKleinBooks"
      >
        Checkout What I am Working On Now!
      </a>
    </section>
  );
};

export default Projects;
