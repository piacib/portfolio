import React, { useEffect, useState } from "react";
import "./hexagon.css";
import "./wave.scss";
import variables from "./style.module.scss";
import HexagonSvg from "../HexagonSvg/HexagonSvg";
import useMousePosition from "../../utils/useMousePosition";
const HEXCLASSES = "scale_down hexagon";
function addHexes(r: number) {
  let classList = [];
  for (var i = 1; i <= 6 * r; i++) {
    classList.push(`${HEXCLASSES} r${r}`);
  }
  return classList;
}

// var radius = 15; //Hex-radius

const LoadScreen = () => {
  const [classList, setClassList] = useState<string[]>([]);
  // const mousePosition = useMousePosition();
  useEffect(() => {
    let totalList: string[] = [];
    const rad = Number(variables.radius);
    for (var r = 1; r < rad; ++r) {
      const newList = addHexes(r);
      totalList.push(...newList);
    }
    setClassList(totalList);
  }, []);

  return (
    <div className="load-container">
      {/* <div
        className="cursor"
        style={{
          top: mousePosition.y + "px",
          left: mousePosition.x + "px",
        }}
      ></div> */}
      <HexagonSvg className={`${HEXCLASSES} r0`} />
      {classList.map((classL, idx) => (
        <HexagonSvg key={classL + idx} className={classL} />
      ))}
    </div>
  );
};

export default LoadScreen;
