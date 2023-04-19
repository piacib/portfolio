import React from "react";
import "./projects.scss";
import useDualFadeIn from "../../utils/useDualFadeIn";
import { ProjectContent, projects } from "./projectsInfo";

const Projects = () => {
  const { classes, containerRef } = useDualFadeIn();
  return (
    <section id="projects">
      <h1>What I have built</h1>
      <ul className="project_card_container">
        {projects.map((x, idx) => (
          <ProjectCard idx={idx} data={x} />
        ))}
      </ul>

      <a
        ref={containerRef}
        className={`button-flip ${classes.left}`}
        data-back="The Ezra Klein Podject"
        data-front="Checkout What I am Working On Now!"
        href="https://github.com/piacib/the_ezra_klein_podject"
      >
        Checkout What I am Working On Now!
      </a>
    </section>
  );
};

export default Projects;
const isEven = (idx: number) => {
  if (idx % 2) {
    return true;
  }
  return false;
};
const leftOrRight = (
  idx: number,
  classes: {
    left: string;
    right: string;
  }
) => {
  if (isEven(idx)) {
    return [classes.left, classes.right];
  }
  return [classes.right, classes.left];
};
interface ProjectCardProps {
  idx: number;
  data: ProjectContent;
}
const ProjectCard = ({ idx, data }: ProjectCardProps) => {
  const { classes, containerRef } = useDualFadeIn();
  return (
    <li
      id="Pokemon_Showdown_Extension"
      className="project_card"
      ref={containerRef}
    >
      <div className={`project_content ${leftOrRight(idx, classes)[0]}`}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        <ul className="skills_list">
          {data.skillsClassNames.map((x) => (
            <li>
              <i className={`skills_icon ${x}`}></i>
            </li>
          ))}
        </ul>
        <div className="small_screen_btn_container">
          <a
            className="projects_btn button-flip"
            data-back="Repo"
            data-front="Repo"
            href={data.repoHref}
          >
            Repo
          </a>
          <a
            className="projects_btn button-flip"
            data-back="Demo"
            data-front="Demo"
            href={data.demoHref}
          >
            Demo
          </a>
        </div>
      </div>
      <div className={`image_link_container ${leftOrRight(idx, classes)[1]}`}>
        <img alt="project demo" src={data.imgLink} className="triangle left" />
        <img alt="project demo" src={data.imgLink} className="triangle right" />
        <a
          className="projects_btn button-flip"
          data-back="Repo"
          data-front="Repo"
          href={data.repoHref}
        >
          Repo
        </a>
        <a
          className="projects_btn button-flip"
          data-back="Demo"
          data-front="Demo"
          href={data.demoHref}
        >
          Demo
        </a>
      </div>
    </li>
  );
};
