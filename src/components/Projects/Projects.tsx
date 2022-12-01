import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <ul className="project_list">
        <li>
          <h2>World Map</h2>
          <div className="temp_img"></div>
        </li>
        <li>
          <h2>Pokemon Extension</h2>
          <div className="temp_img"></div>
        </li>
        <li>
          <h2>Weather App</h2>
          <div className="temp_img"></div>
        </li>
        <li>
          <h2>This Site</h2>
          <div className="temp_img"></div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
