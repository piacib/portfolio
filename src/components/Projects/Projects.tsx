import "./projects.scss";
import useFadeIn from "../../utils/useFadeIn";
import { ProjectContent, projects } from "./projectsInfo";

const Projects = () => {
  const { classes, containerRef } = useFadeIn();
  const { classes: h1Classes, containerRef: h1ContainerRef } = useFadeIn();
  return (
    <section id="projects">
      <h1 ref={h1ContainerRef} className={h1Classes.left}>
        What I have built
      </h1>
      <ul className="project_card_container">
        {projects.map((x, idx) => (
          <ProjectCard key={x.title} idx={idx} data={x} />
        ))}
      </ul>

      <a
        ref={containerRef}
        className={`button-flip ${classes.bottom}`}
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
  const { classes, containerRef } = useFadeIn();
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
            <li key={x}>
              <i className={`skills_icon ${x}`}></i>
            </li>
          ))}
        </ul>
        <div className="small_screen_btn_container">
          <ProjectButtons repoHref={data.repoHref} demoHref={data.demoHref} />
        </div>
      </div>
      <div className={`image_link_container ${leftOrRight(idx, classes)[1]}`}>
        <img alt="project demo" src={data.imgLink} className="triangle left" />
        <img alt="project demo" src={data.imgLink} className="triangle right" />
        <ProjectButtons repoHref={data.repoHref} demoHref={data.demoHref} />
      </div>
    </li>
  );
};
interface Props {
  demoHref: string;
  repoHref: string;
}
const ProjectButtons = ({ demoHref, repoHref }: Props) => (
  <>
    <a
      className="projects_btn button-flip"
      data-back="Repo"
      data-front="Repo"
      href={repoHref}
    >
      Repo
    </a>
    {demoHref ? (
      <a
        className="projects_btn button-flip"
        data-back="Demo"
        data-front="Demo"
        href={demoHref}
      >
        Demo
      </a>
    ) : (
      <a
        className="coming-soon-a projects_btn button-flip "
        data-back="Coming Soon!"
        data-front="Coming Soon!"
        href="/"
      >
        Coming Soon!
      </a>
    )}
  </>
);
