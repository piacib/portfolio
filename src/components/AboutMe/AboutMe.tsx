import React from "react";
import ExpandingPage, {
  ExpandingPageProps,
} from "../ExpandingPage/ExpandingPage";
const AboutMe: React.FC<ExpandingPageProps> = ({ expand, setExpand }) => {
  return (
    <ExpandingPage expand={expand} setExpand={setExpand}>
      <h1>About Me</h1>
      <p>
        I am an aspiring front end web developer currently searching for a job.
        I graduated for the University of Washington in 2019 with a degree in
        Physics and Astronomy. Since then I have been teaching myself Html css
        Javascript and react. Currently I am living in Hawaii working on Tour
        boats as a deckhand and swim guide.
      </p>
    </ExpandingPage>
  );
};
export default AboutMe;
