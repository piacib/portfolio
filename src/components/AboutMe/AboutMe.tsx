import React, { useState } from "react";
import "./aboutMe.scss";
import Me from "../../assets/me.jpg";
import { AboutMeSectionId } from "../../global";
import Planet from "../Planet/Planet";
import useDualFadeIn from "../../utils/useDualFadeIn";
import { jobs, WorkData } from "./jobs";

const hobbies = [
  "Rock climbing",
  "Scuba Diving",
  "Go",
  "Reading",
  "Swimming",
  "helpingothers",
];

const AboutMe: React.FC = () => {
  const [dataIndex, setDataIndex] = useState(0);
  const { classes, containerRef: imageTextContRef } = useDualFadeIn();
  const { classes: workExp, containerRef: workExpRef } = useDualFadeIn();
  const { classes: whereIWorkedClasses, containerRef: whereIWorked } =
    useDualFadeIn();
  return (
    <section id={AboutMeSectionId}>
      {/* <div id="about_me_top_background" className="triangle_background"></div> */}
      <h1 className={`section_header ${whereIWorkedClasses.left}`}>
        Who Am I?
      </h1>
      <div className="about_me_card" ref={imageTextContRef}>
        {/* <div className="about_me_image_container"> */}
        <img src={Me} alt="headshot" className={`${classes.left}`} />
        {/* </div> */}
        <p className={`about_me_text ${classes.right}`}>
          I am an aspiring front end web developer currently searching for a
          job. My passion for web development started a couple years back and I
          have been teaching myself front end web development ever since. I have
          learned a lot by teaching myself but I am now ready to progress my
          coding profesionally and learn more about the world of front end web
          development! I graduated for the University of Washington in 2019 with
          a degree in Physics and Astronomy.
        </p>
      </div>
      <h1 ref={whereIWorked} className={`${whereIWorkedClasses.left}`}>
        Where I have Worked
      </h1>
      <div className="about_me_info">
        <div className="work_container" ref={workExpRef}>
          <ol className={`${workExp.left}`}>
            {jobs.map((x, idx) => (
              <li>
                <button
                  onClick={() => setDataIndex(idx)}
                  className={idx === dataIndex ? "active" : ""}
                >
                  {x.jobTitle}
                </button>
              </li>
            ))}
          </ol>
          <WorkCard data={jobs[dataIndex]} classes={`${workExp.right}`} />
        </div>
        <Planet />
      </div>
    </section>
  );
};
export default AboutMe;
interface WorkCardProps {
  data: WorkData;
  classes: string;
}
const WorkCard = ({ data, classes }: WorkCardProps) => {
  return (
    <div className={`work_card ${classes}`}>
      <h3>
        {data.jobTitle} <span>@</span> {data.workPlace}
      </h3>
      <h4>{data.employmentPeriod}</h4>
      <p>{data.text}</p>
      <ul className="skills_list">
        {data.skills.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
};
