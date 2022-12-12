import React from "react";
import "./AboutMe.css";
import Me from "../../assets/me.jpg";
import { AboutMeSectionId } from "../../global";

const AboutMe: React.FC = () => {
  return (
    <section id={AboutMeSectionId}>
      <h1 className="section_header">About Me</h1>
      <img className="self_portrait" src={Me} alt="self portrait" />
      <ul className="about_me_skills">
        <li>Html</li>
        <li>CSS</li>
        <li>React</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>Python</li>
        <li>Linux</li>
      </ul>
      <p className="about_me_text">
        I am an aspiring front end web developer currently searching for a job.
        I graduated for the University of Washington in 2019 with a degree in
        Physics and Astronomy. Since then I have been teaching myself Html css
        Javascript and react. Currently I am living in Hawaii working on Tour
        boats as a deckhand and swim guide.
      </p>
    </section>
  );
};
export default AboutMe;
