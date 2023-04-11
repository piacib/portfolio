import React, { useRef } from "react";
import "./aboutMe.scss";
// import "./ExperienceCards.css";
import Me from "../../assets/me.jpg";
import { AboutMeSectionId } from "../../global";
import useIntersectionObserver from "../../utils/useIntersectionObserver";

const AboutMe: React.FC = () => {
  const elementRef = useRef(null);
  const isScreen = useIntersectionObserver(elementRef);
  console.log("isOnScreen", isScreen);

  return (
    <section id={AboutMeSectionId} ref={elementRef}>
      {/* <div id="about_me_top_background" className="triangle_background"></div> */}
      <h1 className="section_header">Who Am I?</h1>
      {/* <div className="about_me_image_container">
        <img src={Me} />
      </div> */}
      {/* <p className="about_me_text">
        I am an aspiring front end web developer currently searching for a job.
        I graduated for the University of Washington in 2019 with a degree in
        Physics and Astronomy. Since then I have been teaching myself Html css
        Javascript and react. Currently I am living in Hawaii working on Tour
        boats as a deckhand and swim guide.
      </p>
      <div className="card_container">
        <div className="card">
          <h2>Physics Tutor</h2>
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
        <div className="card">
          <h2>Safety diver</h2>
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
        <div className="card">
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
const AboutMeCard = () => {};
