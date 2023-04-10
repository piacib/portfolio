import React, { useEffect, useState } from "react";
import "./hexagon.css";
import "./wave.scss";
import variables from "./style.module.scss";
import HexagonSvg from "../HexagonSvg/HexagonSvg";
function addHexes(r: number) {
  let classList = [];
  for (var i = 1; i <= 6 * r; i++) {
    classList.push(`scale_down hexagon r${r}`);
  }
  return classList;
}
const additionFactorial = (num: number) => {
  let sum = 0;
  for (let i = num; i > 0; i--) {
    sum += i;
  }
  return sum;
};
const nthChildIterationLoop = (num: number) => {
  const iters = additionFactorial(num);
  let arr = [];
  for (let i = iters; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
// var radius = 15; //Hex-radius
const COLNUM = Number(variables.radius);
const ROWNUM = COLNUM * 2;
const hexNumCalc = () => {};
const LoadScreen = () => {
  const [classList, setClassList] = useState<string[]>([]);
  console.log(additionFactorial(Number(variables.radius)));

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
      {Array.from({ length: COLNUM }).map((x, idx) => (
        <Column colNum={idx + 1} />
      ))}
    </section>
  );
};

export default LoadScreen;

let rowNum = ROWNUM;
const Column = ({ colNum }: { colNum: number }) => {
  if (colNum > 1 && colNum % 2 === 1) {
    rowNum--;
  }
  return (
    <div className={`column c${colNum}`}>
      {Array.from({ length: rowNum }).map((x, idx) => (
        <HexagonSvg className={"scale_down hexagon r"} />
      ))}
    </div>
  );
};
