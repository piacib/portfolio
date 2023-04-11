import { useDot } from "../../utils/useDot";
import "./cursorball.scss";
const CursorBall = () => {
  const { styleObj, onMouseOver } = useDot();
  return (
    <div
      className="cursor"
      onMouseOver={onMouseOver}
      style={{
        ...styleObj,
      }}
    >
      <div className="dot"></div>
    </div>
  );
};
export default CursorBall;
