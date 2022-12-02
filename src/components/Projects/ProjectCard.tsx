import { ProjectType } from "../../types";
import "./projectCard.css";
interface props {
  project: ProjectType;
}
const ProjectCard: React.FC<props> = ({ project }) => {
  return (
    <li>
      <h2>{project.text}</h2>
      <div className="link_container">
        <a href={project.demoHref}>Demo</a>
        <a href={project.repoHref}>Repo</a>
      </div>
      <img src={project.imageSrc} alt={project.imageAlt} className="temp_img"></img>
    </li>
  );
};
export default ProjectCard;
