import React, { useState } from "react";
import "./aboutMe.scss";
import Me from "../../assets/me.jpg";
import { AboutMeSectionId } from "../../global";
import Planet from "../Planet/Planet";
import useDualFadeIn from "../../utils/useDualFadeIn";
type WorkData = {
  jobTitle: string;
  text: string;
  workPlace: string;
  skills: string[];
};
const TutorJob = {
  jobTitle: "Physics Tutor",
  text: "As a physics tutor I developed a deep understanding of the subject and an ability to break down complex concepts into easy-to-understand explanations. I learned to identify individual's learning needs and tailor my approach to maximize student understanding and engagement.",
  workPlace: "The University of Washington",
  skills: [
    "Critical thinking",
    "Problem solving",
    "Explaining Complex Concepts",
  ],
};
const diveJob = {
  jobTitle: "Safety diver",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis commodi fugit illum ipsa vitae, ducimus maiores quo officia iste voluptates cum fuga repellendus consequuntur magnam doloribus pariatur. Doloribus, repellat ipsum.",
  workPlace: "The University of Washington",
  skills: [
    "Critical thinking",
    "Problem solving",
    "Explaining Complex Concepts",
  ],
};
const researchJob = {
  jobTitle: "Plasma Physics Researcher",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis commodi fugit illum ipsa vitae, ducimus maiores quo officia iste voluptates cum fuga repellendus consequuntur magnam doloribus pariatur. Doloribus, repellat ipsum.",
  workPlace: "Justus liebig University",
  skills: [
    "Critical thinking",
    "Problem solving",
    "Explaining Complex Concepts",
  ],
};
const hobbies = [
  "Rock climbing",
  "Scuba Diving",
  "Go",
  "Reading",
  "Swimming",
  "helpingothers",
];
const jobs = [TutorJob, diveJob, researchJob];
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
      {/* <div className="">
          <h2></h2>
          <p>
            As a physics tutor I developed a deep understanding of the subject
            and an ability to break down complex concepts into
            easy-to-understand explanations. I learned to identify individual's
            learning needs and tailor my approach to maximize student
            understanding and engagement.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>Critical thinking</li>
            <li>Problem solving</li>
            <li></li>
          </ul>
        </div>
        <div className="">
          <h2></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            iste architecto qui. Voluptates, inventore ducimus consectetur
            veniam illo perferendis iste, quia deserunt corporis quasi,
            recusandae totam adipisci ipsa hic odit?{" "}
          </p>
          <h3>Skills</h3>

          <ul>
            <li>Working under pressure</li>
            <li>Managing expectations</li>
            <li>Managing multiple people</li>
          </ul>
        </div>
        <div className="">
          <h2>Plasma Physics Researcher</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            voluptas ab placeat fugit, perspiciatis consectetur, id quia
          </p>
          <h3>Skills</h3>

          <ul>
            <li>Working under deadlines</li>
            <li>Tackling real life technical problems</li>
            <li>Compiling results into a cohesive paper</li>
          </ul>
        </div>
      </div> */}
      {/* 
      <div
        id="about_me_bottom_background"
        className="triangle_background"
        ></div>
      <ul className="about_me_skills">
        <li>
          <i className="skills_icon devicon-javascript-plain"></i>
        </li>
        <li>
          <i className="skills_icon devicon-html5-plain-wordmark"></i>
        </li>

        <li>
          <i className="skills_icon devicon-react-original"></i>
        </li>

        <li>
          <i className="skills_icon devicon-python-plain"></i>
        </li>
        <li>
          <i className="skills_icon devicon-linux-plain"></i>
        </li>
        <li>
          <i className="skills_icon devicon-github-original"></i>
        </li>
        <li>
          <i className="skills_icon devicon-css3-plain-wordmark"></i>
        </li>
        <li>
          <i className="skills_icon devicon-typescript-plain"></i>
        </li>
      </ul> */}
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
        {data.jobTitle}@{data.workPlace}
      </h3>
      <p>{data.text}</p>
      <ul className="skills_list">
        {data.skills.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
};
