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
        <img
          className="project_image"
          src={project.imageSrc}
          alt={project.imageAlt}
        />
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
      <ul className="project_list" data-testid="project_list">
        {projects.map((project) => (
          <ProjectLi project={project} key={project.text} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
