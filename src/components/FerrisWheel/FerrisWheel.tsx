import React, { useEffect, useRef, useState } from "react";
import Bubble from "../Bubble/Bubble";
import "./FerrisWheel.css";
import CenterImage from "../CenterImage/CenterImage";
import Me from "../../assets/me.jpg";
import QuestionMark from "../../assets/question-mark-svgrepo-com.svg";
import Resume from "../../assets/resume-svgrepo-com.svg";
import Pokeball from "../../assets/pokeball-svgrepo-com.svg";
import Fish from "../../assets/fish-svgrepo-com.svg";
import Weather from "../../assets/weather-rain-svgrepo-com.svg";
import Timer from "../../assets/timer-svgrepo-com.svg";
import Linkedin from "../../assets/linkedin-svgrepo-com.svg";
import { Passengers, Hrefs } from "./types";
export const projects: Passengers[] = [
  {
    repoHref: "https://github.com/piacib/pokemon-showdown-extension",
    demoHref: "https://github.com/piacib/pokemon-showdown-extension",
    imageSrc: Pokeball,
    imageAlt: "pokeball",
    text: "Pokemon Extension",
    backgroundColor: "blue",
  },
  {
    repoHref: "https://github.com/piacib/weather_typescript_app",
    demoHref: "https://github.com/piacib/weather_typescript_app",
    imageSrc: Weather,
    imageAlt: "storm cloud",
    text: "Weather",
    backgroundColor: "green",
  },
  {
    repoHref: "https://github.com/piacib/hawaiian-fish",
    demoHref: "https://github.com/piacib/hawaiian-fish",
    imageSrc: Fish,
    imageAlt: "World Map",
    text: "World Map",
    backgroundColor: "pink",
  },
  {
    repoHref: "https://github.com/piacib/reddit-timer-piacib",
    demoHref: "https://github.com/piacib/reddit-timer-piacib",
    imageSrc: Timer,
    imageAlt: "timer",
    text: "Reddit Post Timer",
    backgroundColor: "teal",
  },
  {
    repoHref: "https://github.com/piacib/",
    demoHref: "https://github.com/piacib/",
    imageSrc: Pokeball,
    imageAlt: "",
    text: "this site!",
    backgroundColor: "orange",
  },
];

const dataArray: Passengers[] = [
  {
    repoHref: "",
    demoHref: "",
    imageSrc: QuestionMark,
    imageAlt: "question mark",
    text: "About Me",
    backgroundColor: "blue",
  },
  {
    repoHref: "",
    demoHref: "",
    imageSrc: Resume,
    imageAlt: "resume",
    text: "Resume",
  },
  {
    repoHref: "",
    demoHref: "",
    imageSrc: Linkedin,
    imageAlt: "linkedin",
    text: "Linkedin",
  },
  ...projects,
];

const FerrisWheel: React.FC = () => {
  const [centerImageData, setCenterImageData] = useState<Hrefs>({
    repoHref: "",
    demoHref: "",
    imageSrc: "",
    imageAlt: "",
    backgroundColor: "",
  });
  const [mouseOnCenterImage] = useState<boolean>(false);
  const [expandAboutMe, setExpandAboutMe] = useState<boolean>(false);
  const [expandResume, setExpandResume] = useState<boolean>(false);

  const mouseOnCenterImageRef = useRef(mouseOnCenterImage);
  mouseOnCenterImageRef.current = mouseOnCenterImage;

  const func = (mouseOnCenterImageRef: boolean) => {
    if (!mouseOnCenterImageRef) {
      setCenterImageData({
        repoHref: "",
        demoHref: "",
        imageSrc: "",
        imageAlt: "",
        backgroundColor: "",
      });
    }
  };
  useEffect(() => {
    const clearImage = () =>
      setTimeout(() => func(mouseOnCenterImageRef.current), 5000);
    if (centerImageData.repoHref) {
      clearImage();
    }
    return () => {
      clearTimeout(clearImage());
    };
  }, [centerImageData.repoHref, mouseOnCenterImageRef]);

  return (
    <div className="orbit">
      <CenterImage
        mouseOnCenterImage={(arg1: boolean) =>
          (mouseOnCenterImageRef.current = arg1)
        }
        src1={Me}
        imageSrc={centerImageData.imageSrc}
        imageAlt={centerImageData.imageAlt}
        href1={centerImageData.repoHref}
        href2={centerImageData.demoHref}
        backgroundColor={centerImageData.backgroundColor}
      />
      <ul>
        {dataArray.slice(2).map((data, idx) => (
          <Bubble
            onClick={() => {
              setCenterImageData({
                repoHref: data.repoHref,
                imageSrc: data.imageSrc,
                imageAlt: data.imageAlt,
                demoHref: data.demoHref,
                backgroundColor: data.backgroundColor,
              });
            }}
            imageSrc={data.imageSrc}
            imageAlt={data.imageAlt}
            text={data.text}
            firstBubble={idx === 0 ? true : false}
            key={data.text}
          />
        ))}
        <Bubble
          onClick={() => {
            setCenterImageData(dataArray[0]);
            setExpandAboutMe(!expandAboutMe);
          }}
          imageSrc={dataArray[0].imageSrc}
          imageAlt={dataArray[0].imageAlt}
          text={dataArray[0].text}
          key={dataArray[0].text}
        />

        <Bubble
          onClick={() => {
            setCenterImageData({
              repoHref: dataArray[1].repoHref,
              imageSrc: dataArray[1].imageSrc,
              imageAlt: dataArray[1].imageAlt,
              demoHref: dataArray[1].demoHref,
            });
            setExpandResume(!expandResume);
          }}
          imageSrc={dataArray[1].imageSrc}
          imageAlt={dataArray[1].imageAlt}
          text={dataArray[1].text}
          key={dataArray[1].text}
        />
      </ul>
    </div>
  );
};

export default FerrisWheel;
