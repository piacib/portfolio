import React, { useState } from "react";
import "./aboutMe.scss";
import Me from "../../assets/me.jpg";
import Planet from "../Planet/Planet";
import useFadeIn from "../../utils/useFadeIn";
import { jobs, WorkData } from "./jobs";

const AboutMe: React.FC = () => {
  const [dataIndex, setDataIndex] = useState(0);
  const { classes, containerRef: imageTextContRef } = useFadeIn();
  const { classes: workExp, containerRef: workExpRef } = useFadeIn();
  const { classes: whereIWorkedClasses, containerRef: whereIWorked } =
    useFadeIn();
  const { classes: h1Classes, containerRef: h1Ref } = useFadeIn();
  return (
    <section id="about_me">
      <h1 ref={h1Ref} className={`section_header ${h1Classes.left}`}>
        Who Am I?
      </h1>
      <div className="about_me_card" ref={imageTextContRef}>
        <img src={Me} alt="headshot" className={`${classes.left}`} />
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
              <li key={x.jobTitle}>
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
      </div>
      <Planet />
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
          <li key={x}>
            <p>{x}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
