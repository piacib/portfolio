import React from "react";
import RainSvg from "../../assets/RainSvg";
import "./Projects.css";
import world from "../../assets/earth-globe-tool-svgrepo-com.svg";
import pokeball from "../../assets/pokeball-svgrepo-com.svg";
import resume from "../../assets/resume-svgrepo-com.svg";
import weather from "../../assets/weather-rain-svgrepo-com.svg";
import timer from "../../assets/timer-svgrepo-com.svg";

interface Props {
  title: string;
  src: string;
  alt: string;
  demoHref: string;
  repoHref: string;
  children?: React.ReactNode;
}
const ProjectLi: React.FC<Props> = ({
  title,
  src,
  alt,
  demoHref,
  repoHref,
  children,
}) => {
  return (
    <li>
      <div className="project_container">
        <h2>{title}</h2>
        <div className="project_links">
          <a href={demoHref}>Demo</a>
          <a href={repoHref}>Repo</a>
        </div>
        <img className="project_image" src={src} alt={alt} />
      </div>
      <div className="project_hover">
        <h3>Skills</h3>
        <ul className="project_skills">{children}</ul>
      </div>
    </li>
  );
};
const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <ul className="project_list">
        <ProjectLi
          title={"World Map"}
          src={world}
          alt={"world"}
          demoHref={""}
          repoHref={""}
        >
          <li>SVG</li>
          <li>local storage</li>
          <li>display</li>
          <li>css</li>
        </ProjectLi>

        <ProjectLi
          title={"Pokemon Extension"}
          src={pokeball}
          alt={"pokeball"}
          demoHref={""}
          repoHref={"https://github.com/piacib/pokemon-showdown-extension"}
        >
          <li>Chrome Extension</li>
          <li>Responsive design</li>
          <li>Api requests</li>
          <li>code splitting</li>
        </ProjectLi>
        <ProjectLi
          title={"Weather"}
          src={weather}
          alt={"storm cloud"}
          repoHref={"https://github.com/piacib/weather_typescript_app"}
          demoHref={""}
        >
          <li>Typescript</li>
          <li>Api requests</li>
          <li>Error Handling</li>
        </ProjectLi>
        <ProjectLi
          title={"Reddit Timer App"}
          src={timer}
          alt={"timer"}
          repoHref={"https://github.com/piacib/reddit-timer-piacib"}
          demoHref={""}
        >
          <li>React Testing</li>
          <li>Following an established Design</li>
          <li>Api Requests</li>
        </ProjectLi>
        <ProjectLi
          title={"This Site"}
          src={resume}
          alt={"paper and pen"}
          demoHref={""}
          repoHref={"https://github.com/piacib/portfolio"}
        >
          <li>CSS Variables</li>
          <li>Responsive Design </li>
          <li>Mobile Design</li>
        </ProjectLi>
      </ul>
    </section>
  );
};

export default Projects;
