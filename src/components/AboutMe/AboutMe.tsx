import React from "react";
import "./AboutMe.css";
import Me from "../../assets/me.jpg";
import { AboutMeSectionId } from "../../global";

const svgScaleValue = 0.2;
const AboutMe: React.FC = () => {
  let scale = (scaleVal = svgScaleValue) => ({
    style: { transform: `scale(${scaleVal})` },
  });
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
        {/* <li>
          <CssSvg props={scale()} />
        </li>
        <li>
          <HtmlSvg props={scale()} />
        </li>
        <li>
          <PythonSvg props={scale()} />
        </li>
        <li>
          <JsSvg props={scale()} />
        </li>
        <li>
          <ReactSvg props={scale()} />
        </li> */}
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
