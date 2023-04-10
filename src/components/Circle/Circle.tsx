import "./circle.css";
const Circle = () => {
  return (
    <div className="circle__boxe ">
      <div className="circle__wrapper circle__wrapper--right">
        <div className="circle__whole circle__right"></div>
      </div>
      <div className="circle__wrapper circle__wrapper--left">
        <div className="circle__whole circle__left"></div>
      </div>
    </div>
  );
};
export default Circle;
