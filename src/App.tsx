import React from "react";
import "./App.css";
import "./bubble.css";
import "./normalize.css";
import Pokeball from "./assets/3.svg";
import Fish from "./assets/fish-svgrepo-com.svg";
import QuestionMark from "./assets/question-mark-svgrepo-com.svg";
import Weather from "./assets/weather-rain-svgrepo-com.svg";
import Timer from "./assets/timer-svgrepo-com.svg";
import Linkedin from "./assets/linkedin-svgrepo-com.svg";

interface BubbleProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
}
const Bubble: React.FC<BubbleProps> = ({ imageSrc, imageAlt, text }) => {
  return (
    <li className="bubble">
      <div>
        <img className="bubble-image" src={imageSrc} alt={imageAlt} />
      </div>
      <p>{text}</p>
    </li>
  );
};
const dataArray = [
  { imageSrc: QuestionMark, imageAlt: "question mark", text: "About Me" },
  { imageSrc: Pokeball, imageAlt: "pokeball", text: "Pokemon Extension" },
  { imageSrc: Weather, imageAlt: "storm cloud", text: "Weather" },
  { imageSrc: Fish, imageAlt: "fish", text: "Fish" },
  { imageSrc: Timer, imageAlt: "timer", text: "Reddit post timer" },
  { imageSrc: Linkedin, imageAlt: "", text: "Linkedin" },
  { imageSrc: Pokeball, imageAlt: "", text: "text" },
  { imageSrc: Pokeball, imageAlt: "", text: "text" },
];
function App() {
  return (
    <div className="App">
      <div className="orbit">
        <div className="center-image">
          <img className="profile-image" />
          <img className="profile-image yellow" />
        </div>
        <ul>
          {dataArray.map((data) => (
            <Bubble
              imageSrc={data.imageSrc}
              imageAlt={data.imageAlt}
              text={data.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
