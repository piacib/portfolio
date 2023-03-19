import React from "react";
import "./AboutMe.css";
import Me from "../../assets/me.jpg";
import { AboutMeSectionId } from "../../global";

const AboutMe: React.FC = () => {
  return (
    <section id={AboutMeSectionId}>
      <div id="about_me_background" className="about-me-background-color"></div>
      <h1 className="section_header">About Me</h1>
      <p className="about_me_text">
        I am an aspiring front end web developer currently searching for a job.
        I graduated for the University of Washington in 2019 with a degree in
        Physics and Astronomy. Since then I have been teaching myself Html css
        Javascript and react. Currently I am living in Hawaii working on Tour
        boats as a deckhand and swim guide.
      </p>
      <div id="experience_container">
        <div className="experience_card">
          <h2>Physics Tutor</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            voluptas ab placeat fugit, perspiciatis consectetur, id quia
          </p>
          <h3>Skills</h3>
          <ul>
            <li>Critical thinking</li>
            <li>Problem solving</li>
            <li></li>
          </ul>
        </div>
        <div className="experience_card">
          <h2>Safety diver</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            voluptas ab placeat fugit, perspiciatis consectetur, id quia
          </p>
          <h3>Skills</h3>

          <ul>
            <li>Working under pressure</li>
            <li>Managing expectations</li>
            <li>Managing multiple people</li>
          </ul>
        </div>
        <div className="experience_card">
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
      </div>
      <div
        id="about-me-bottom-border"
        className="about-me-background-color"
      ></div>
      <ul className="about_me_skills">
        <li>
          <i className="devicon-html5-plain-wordmark"></i>
        </li>
        <li>
          <i className="devicon-css3-plain-wordmark"></i>
        </li>
        <li>
          <i className="devicon-react-original"></i>
        </li>
        <li>
          <i className="devicon-adonisjs-original"></i>
        </li>
        <li>
          <i className="devicon-javascript-plain"></i>
        </li>
        <li>
          <i className="devicon-typescript-plain"></i>
        </li>
        <li>
          <i className="devicon-python-plain"></i>
        </li>
        <li>
          <i className="devicon-linux-plain"></i>
        </li>
        <li>
          <i className="devicon-github-original"></i>
        </li>
      </ul>
    </section>
  );
};
export default AboutMe;

// {
//   /* <img className="self_portrait" src={Me} alt="self portrait" />
//       <ul className="about_me_skills">
//         <li>Html</li>
//         <li>CSS</li>
//         <li>React</li>
//         <li>CSS</li>
//         <li>Javascript</li>
//         <li>HTML</li>
//         <li>Python</li>
//         <li>Linux</li>
//       </ul> */
// }
