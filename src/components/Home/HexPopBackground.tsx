import HexagonSvg from "../HexagonSvg/HexagonSvg";
import variables from "../globalStyle.module.scss";
import "./home_background.scss";

const DEFAULT_HEX_COUNT = Number(variables.backgroundHexCount);
const HexPopBackground = ({ hexNum = DEFAULT_HEX_COUNT }) => {
  let arr: JSX.Element[] = [];
  for (let index = 0; index < hexNum; index++) {
    arr.push(<HexagonSvg className={"background_hex"} />);
  }
  return <>{arr}</>;
};
export default HexPopBackground;
