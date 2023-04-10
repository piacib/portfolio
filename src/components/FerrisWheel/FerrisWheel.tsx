import React from "react";
import Bubble from "../Bubble/Bubble";
import "./FerrisWheel.css";
import CenterImage from "../CenterImage/CenterImage";
import Me from "../../assets/me.jpg";
import { dataArray } from "../../global";
import { TbPokeball, TbQuestionMark } from "react-icons/tb";
import { IoNewspaperOutline, IoLogoLinkedin } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { RxLapTimer } from "react-icons/rx";
import { RiBriefcase5Line } from "react-icons/ri";
import Circle from "../Circle/Circle";
const svgSize = 90;

const FerrisWheel: React.FC = () => {
  return (
    <div className="orbit">
      <Circle />

      <CenterImage src1={Me} />
      <ul>
        <Bubble
          onClick={() => {}}
          key={dataArray[2].text}
          href={dataArray[2].href}
        >
          <IoLogoLinkedin size={svgSize} />
        </Bubble>
        <Bubble
          onClick={() => {}}
          key={dataArray[3].text}
          href={dataArray[3].href}
        >
          <TbPokeball size={svgSize} />
        </Bubble>
        <Bubble
          onClick={() => {}}
          key={dataArray[4].text}
          href={dataArray[4].href}
        >
          <TiWeatherPartlySunny size={svgSize} />
        </Bubble>
        <Bubble
          onClick={() => {}}
          key={dataArray[5].text}
          href={dataArray[5].href}
        >
          <BsGlobeCentralSouthAsia size={svgSize} />
        </Bubble>
        <Bubble
          onClick={() => {}}
          key={dataArray[6].text}
          href={dataArray[6].href}
        >
          <RxLapTimer size={svgSize} />
        </Bubble>
        <Bubble
          onClick={() => {}}
          key={dataArray[7].text}
          href={dataArray[7].href}
        >
          <RiBriefcase5Line size={svgSize} />
        </Bubble>
        <Bubble
          onClick={() => {}}
          key={dataArray[0].text}
          href={dataArray[0].href}
        >
          <TbQuestionMark size={svgSize} />
        </Bubble>
        <Bubble
          onClick={() => {}}
          href={dataArray[1].href}
          key={dataArray[1].text}
        >
          <IoNewspaperOutline size={svgSize} />
        </Bubble>
      </ul>
    </div>
  );
};

export default FerrisWheel;
