import React, { useEffect, useRef, useState } from "react";
import Bubble from "../Bubble/Bubble";
import "./FerrisWheel.css";
import CenterImage from "../CenterImage/CenterImage";
import Me from "../../assets/me.jpg";
import ExpandingPage from "../ExpandingPage/ExpandingPage";
import QuestionMark from "../../assets/question-mark-svgrepo-com.svg";
import Resume from "../../assets/resume-svgrepo-com.svg";
import Pokeball from "../../assets/pokeball-svgrepo-com.svg";
import Fish from "../../assets/fish-svgrepo-com.svg";
import Weather from "../../assets/weather-rain-svgrepo-com.svg";
import Timer from "../../assets/timer-svgrepo-com.svg";
import Linkedin from "../../assets/linkedin-svgrepo-com.svg";

const dataArray: Passengers[] = [
  {
    repoHref: "",
    demoHref: "",
    imageSrc: QuestionMark,
    imageAlt: "question mark",
    text: "About Me",
  },
  {
    repoHref: "",
    demoHref: "",
    imageSrc: Resume,
    imageAlt: "resume",
    text: "Resume",
  },
  {
    repoHref: "https://github.com/piacib/pokemon-showdown-extension",
    demoHref: "",
    imageSrc: Pokeball,
    imageAlt: "pokeball",
    text: "Pokemon Extension",
  },
  {
    repoHref: "https://github.com/piacib/weather_typescript_app",
    demoHref: "",
    imageSrc: Weather,
    imageAlt: "storm cloud",
    text: "Weather",
  },
  {
    repoHref: "https://github.com/piacib/hawaiian-fish",
    demoHref: "",
    imageSrc: Fish,
    imageAlt: "fish",
    text: "Fish",
  },
  {
    repoHref: "https://github.com/piacib/reddit-timer-piacib",
    demoHref: "",
    imageSrc: Timer,
    imageAlt: "timer",
    text: "Reddit Post Timer",
  },
  {
    repoHref: "",
    demoHref: "",
    imageSrc: Linkedin,
    imageAlt: "linkedin",
    text: "Linkedin",
  },
  {
    repoHref: "",
    demoHref: "",
    imageSrc: Pokeball,
    imageAlt: "",
    text: "this site!",
  },
];

type Hrefs = {
  repoHref: `https://${string}` | "";
  demoHref: string;
  imageSrc: string;
  imageAlt: string;
};

export interface Passengers extends Hrefs {
  text: string;
  onClick?: () => void;
}

const FerrisWheel: React.FC = () => {
  const [centerImageData, setCenterImageData] = useState<Hrefs>({
    repoHref: "",
    demoHref: "",
    imageSrc: "",
    imageAlt: "",
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
            setCenterImageData({
              repoHref: dataArray[0].repoHref,
              imageSrc: dataArray[0].imageSrc,
              imageAlt: dataArray[0].imageAlt,
              demoHref: dataArray[0].demoHref,
            });
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
      <div className="support flex-center">
        <div className="support-beam support-left">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, idx) => (
            <div key={"support" + idx} className="bolt"></div>
          ))}
        </div>
        <div className="support-beam support-right">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, idx) => (
            <div key={"support" + idx} className="bolt"></div>
          ))}
        </div>
        <div className="base">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, idx) => (
            <div key={"base" + idx} className="bolt"></div>
          ))}
        </div>
      </div>

      <ExpandingPage
        expand={expandAboutMe}
        setExpand={(e) => setExpandAboutMe(e)}
      >
        <div>About Me</div>
      </ExpandingPage>
      <ExpandingPage
        expand={expandResume}
        setExpand={(e) => setExpandResume(e)}
      >
        <div>Resume</div>
      </ExpandingPage>
    </div>
  );
};

export default FerrisWheel;
