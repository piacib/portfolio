import "./planet.scss";
import variables from "../Moon/style.module.scss";
import Moon from "../Moon/Moon";
import useFadeIn from "../../utils/useFadeIn";

export const icons = [
  "devicon-javascript-plain",
  "devicon-html5-plain-wordmark",
  "devicon-react-original",
  "devicon-python-plain",
  "devicon-linux-plain",
  "devicon-github-original",
  "devicon-css3-plain-wordmark",
  "devicon-typescript-plain",
  "devicon-sass-original",
];
const Planet = () => {
  const { classes: techsClasses, containerRef: techsRef } = useFadeIn();

  if (icons.length !== Number(variables.moonCount)) {
    console.warn(
      "not all icons are displayed, increase $moonCount to update Moons."
    );
  }
  return (
    <div ref={techsRef} className={`orbit ${techsClasses.left} `}>
      <div className={`planet_face flip-containe circle `}>
        <p className="techs_text">Technologies</p>
      </div>
      <ul>
        {icons.map((icon, idx) => (
          <Moon key={icon + idx}>
            <i className={`skills_icon ${icon}`}></i>
          </Moon>
        ))}
      </ul>
    </div>
  );
};
export default Planet;
