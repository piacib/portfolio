import React from "react";
import "./projects.scss";
import useDualFadeIn from "../../utils/useDualFadeIn";
import { ProjectContent, projects } from "./projectsInfo";

const Projects = () => {
  return (
    <section id="projects">
      <h1>What I have built</h1>
      <ul className="project_card_container">
        {projects.map((x, idx) => (
          <ProjectCard idx={idx} data={x} />
        ))}
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
          <a className="button-85 projects_btn repo" href={data.repoHref}>
            Repo
          </a>
          <a className="projects_btn demo" href={data.demoHref}>
            Site
          </a>
        </div>
      </div>
      <div className={`image_link_container ${leftOrRight(idx, classes)[1]}`}>
        <img alt="project demo" src={data.imgLink} className="triangle left" />
        <img alt="project demo" src={data.imgLink} className="triangle right" />
        <a className="button-85 projects_btn repo" href={data.repoHref}>
          Repo
        </a>
        <a className="projects_btn demo" href={data.demoHref}>
          Site
        </a>
      </div>
    </li>
  );
};
{
  /* <ProjectCard direction={Direction.Left} />
        <ProjectCard direction={Direction.Left} /> */
}
{
  /* <li id="PokeInfo" className="card">
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
        </li> */
}
