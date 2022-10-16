import React from "react";
import "./AboutMe.css";
import Me from "../../assets/me.jpg";
import CssHtmlSvg from "../../assets/CSS";
const AboutMe: React.FC = () => {
  return (
    <section id="about_me">
      <h1 className="section_header">About Me</h1>
      <ul className="about_me_skills">
        <li>
          <CssHtmlSvg img={"css"} />
        </li>
        <li>{/* <CssHtmlSvg img={"html"} /> */}</li>
        <li>Html</li>
        <li>CSS</li>
        <li>React</li>
        <li>JS</li>
        <li>Python</li>
      </ul>
      <img className="self_portrait" src={Me} alt="self portrait" />
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
