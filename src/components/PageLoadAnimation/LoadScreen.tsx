import "./wave.scss";
import variables from "./style.module.scss";
import HexagonSvg from "../HexagonSvg/HexagonSvg";
import CursorBall from "../CursorBall/CursorBall";
import useInitialPageLoad from "../../utils/useInitialPageLoad";

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
  const { loaded, initialLoadClassName } = useInitialPageLoad();
  return (
    <>
      <div className={`load-container ${loaded ? "" : initialLoadClassName}`}>
        {hexRowGenerator(radius).map((x, idx) => (
          <HexRow rowLength={x} rowNum={idx} key={`${x}${idx}`} />
        ))}
      </div>
      {/* )} */}
      {/* <CursorBall />
      <CursorBall />
      <CursorBall /> */}
    </>
  );
};

export default LoadScreen;
let key = 1;
const HexRow = ({
  rowLength,
  rowNum,
}: {
  rowLength: number;
  rowNum: number;
}) => {
  return (
    <div className={`row r${rowNum}`}>
      {Array.from({ length: rowLength }).map((x, idx) => (
        <HexagonSvg key={`${idx}`} className={"hexagon"} />
      ))}
    </div>
  );
};
