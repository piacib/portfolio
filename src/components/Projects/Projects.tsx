import React from "react";
import "./Projects.css";
import { projects } from "../FerrisWheel/FerrisWheel";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <ul className="project_list">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
