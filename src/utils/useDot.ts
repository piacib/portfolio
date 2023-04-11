import { useReducer } from "react";

type Action = {
  type: "adjustPosition";
  payload: { clientX: number; clientY: number };
};

const MAX_INCREMENT = 100;
const MIN_INCREMENT = 300;
function getRandomIncrement(min = MIN_INCREMENT, max = MAX_INCREMENT) {
  return Math.random() * (max - min) + min;
}
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const generateNewValue = (pos: number, mouse: number, maxSize: number) => {
  const fromWest = mouse < pos;
  const directionX = fromWest ? 1 : -1;
  const newPos = pos + directionX * getRandomIncrement();
  if (newPos < 0) {
    return mouse + 200;
  }
  if (newPos > maxSize) {
    return mouse - 200;
  }
  return newPos;
};

function reducer(state: DOT_POSITION, action: Action) {
  switch (action.type) {
    case "adjustPosition":
      return {
        x: generateNewValue(state.x, action.payload.clientX, windowWidth),
        y: generateNewValue(state.y, action.payload.clientY, windowHeight),
      };

    default:
      throw new Error();
  }
}
type DOT_POSITION = {
  x: number;
  y: number;
};
export const useDot = () => {
  const [state, dispatch] = useReducer(reducer, {
    x: windowWidth / 2,
    y: 500,
  });
  const onMouseOver = (e: React.MouseEvent) => {
    dispatch({
      type: "adjustPosition",
      payload: {
        clientY: e.clientY,
        clientX: e.clientX,
      },
    });
  };
  const styleObj = {
    top: state.y + "px",
    left: state.x + "px",
  };
  return { styleObj, onMouseOver };
};
