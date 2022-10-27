import React from "react";
import RainSvg from "../../assets/RainSvg";
import "./Projects.css";
import world from "../../assets/earth-globe-tool-svgrepo-com.svg";
import pokeball from "../../assets/pokeball-svgrepo-com.svg";
import resume from "../../assets/resume-svgrepo-com.svg";
import weather from "../../assets/weather-rain-svgrepo-com.svg";
import timer from "../../assets/timer-svgrepo-com.svg";

interface LiProps {
  title: string;
  src: string;
  alt: string;
  demoHref: string;
  repoHref: string;
}
const ProjectLi: React.FC<LiProps> = ({
  title,
  src,
  alt,
  demoHref,
  repoHref,
}) => {
  return (
    <li>
      <div className="project_container">
        <h2>{title}</h2>
        <img className="project_image" src={src} alt={alt} />
      </div>
      <div className="project_links">
        <a href={demoHref}>Demo</a>
        <a href={repoHref}>Repository</a>
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
        />
        <ProjectLi
          title={"Pokemon Showdown Extension"}
          src={pokeball}
          alt={"pokeball"}
          demoHref={""}
          repoHref={"https://github.com/piacib/pokemon-showdown-extension"}
        />
        <ProjectLi
          title={"Weather"}
          src={weather}
          alt={"storm cloud"}
          repoHref={"https://github.com/piacib/weather_typescript_app"}
          demoHref={""}
        />
        <ProjectLi
          title={"Reddit Timer App"}
          src={timer}
          alt={"timer"}
          repoHref={"https://github.com/piacib/reddit-timer-piacib"}
          demoHref={""}
        />
        <ProjectLi
          title={"This Site"}
          src={resume}
          alt={"paper and pen"}
          demoHref={""}
          repoHref={"https://github.com/piacib/portfolio"}
        />
      </ul>
    </section>
  );
};

export default Projects;
