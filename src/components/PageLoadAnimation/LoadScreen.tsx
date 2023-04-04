import React, { useEffect, useState } from "react";
import "./hexagon.css";
import "./wave.scss";
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
  const [animationDisplay, setAnimationDisplay] = useState<string>("auto");
  console.log("radius", variables.radius);
  useEffect(() => {
    let totalList: string[] = [];
    const rad = Number(variables.radius);
    for (var r = 1; r < rad; ++r) {
      const newList = addHexes(r);
      totalList.push(...newList);
    }
    setClassList(totalList);
  }, []);
  useEffect(() => {
    // const totalAnimationTime = variables.totalAnimationTime.match(/\d+/);
    // if (totalAnimationTime) {
    //   let time = Number(totalAnimationTime[0]);
    //   setTimeout(() => {
    //     setAnimationDisplay("none");
    //   }, (time + 3) * 1000);
    // } else {
    //   setAnimationDisplay("none");
    // }
  }, []);

  return (
    <section className="container" style={{ display: animationDisplay }}>
      <div className="hexagon r0"></div>
      {classList.map((classL, idx) => (
        <div key={classL + idx} className={classL} />
      ))}
    </section>
    // <section className="load_screen_container">
    //   <div>
    //     <div>
    //       <span className="one side6"></span>
    //       <span className="two side3"></span>
    //     </div>
    //   </div>

    //   <div>
    //     <div>
    //       <span className="one side1"></span>
    //       <span className="two side4"></span>
    //     </div>
    //   </div>

    //   <div>
    //     <div>
    //       <span className="one side5"></span>
    //       <span className="two side2"></span>
    //     </div>
    //   </div>
    // </section>
  );
};

export default LoadScreen;
