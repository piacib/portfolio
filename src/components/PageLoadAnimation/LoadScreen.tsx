import React, { useEffect, useState } from "react";
import "./hexagon.css";
// import "./wave.scss";
import variables from "./style.module.scss";
function addHexes(r: number) {
  let classList = [];
  for (var i = 1; i <= 6 * r; i++) {
    classList.push(`hexagon r${r}`);
  }
  return classList;
}

// var radius = 15; //Hex-radius

const LoadScreen = () => {
  const [classList, setClassList] = useState<string[]>([]);
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
    <section className="load-container">
      <div className="hexagon r0"></div>
      {classList.map((classL, idx) => (
        <div key={classL + idx} className={classL} />
      ))}
    </section>
  );
};

export default LoadScreen;
