import React from "react";
import "./Projects.css";
import { ProjectType } from "../../types";
import { projects, ProjectSectionId } from "../../global";

interface Props {
  project: ProjectType;
  children?: React.ReactNode;
}
const ProjectLi: React.FC<Props> = ({ project, children }) => {
  return (
    <li className="project_container">
      <h2>{project.text}</h2>
      <div className="project_links">
        <a href={project.demoHref}>Demo</a>
        <a href={project.repoHref}>Repo</a>
      </div>
      <div className="bottom_container">
        {/* <img
          className="project_image"
          src={project.imageSrc}
          alt={project.imageAlt}
        /> */}
        <div className="project_hover">
          <h3>Skills</h3>
          <ul className="project_skills">
            {project.skills.map((skill, idx) => (
              <li key={skill + idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
const Projects = () => {
  return (
    <section id={ProjectSectionId}>
      <h1>Projects</h1>
      <div className="experience_container">
        <div id="Pokemon_Showdown_Extension" className="experience_card">
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
        </div>
        <div id="PokeInfo" className="experience_card">
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
        </div>
        <div id="Reddit_Timer_App" className="experience_card">
          <h2>Reddit Timer App</h2>
          <p></p>
          <h3>Skills</h3>
          <ul>
            <li>Developing a site from a figma design</li>
            <li>api fetching</li>
            <li></li>
          </ul>
        </div>
        <div id="Portfolio" className="experience_card">
          <h2>This Site</h2>
          <p></p>
          <h3>Skills</h3>
          <ul>
            <li>CSS Variables</li>
            <li>CSS Animations</li>
            <li></li>
          </ul>
        </div>
        <div id="World_Map" className="experience_card">
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
