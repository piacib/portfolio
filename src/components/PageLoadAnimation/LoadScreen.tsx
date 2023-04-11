import "./wave.scss";
import variables from "./style.module.scss";
import HexagonSvg from "../HexagonSvg/HexagonSvg";
import CursorBall from "../CursorBall/CursorBall";

const radius = Number(variables.radius);
const hexRowGenerator = (radius: number) => {
  let num = radius;
  let arr = [];
  while (num > 1) {
    arr.push(num);
    arr.push(num);
    num--;
  }
  arr.push(1);
  return arr;
};

const LoadScreen = () => {
  return (
    <>
      <div className="load-container">
        {hexRowGenerator(radius).map((x, idx) => (
          <HexRow rowLength={x} rowNum={idx} />
        ))}
      </div>
      <CursorBall />
      <CursorBall />
      <CursorBall />
    </>
  );
};

export default LoadScreen;

const HexRow = ({
  rowLength,
  rowNum,
}: {
  rowLength: number;
  rowNum: number;
}) => {
  return (
    <div className={`row r${rowNum}`}>
      {Array.from({ length: rowLength }).map((x) => (
        <HexagonSvg className={"hexagon"} />
      ))}
    </div>
  );
};
