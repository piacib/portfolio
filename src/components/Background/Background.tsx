import Grass from "../Grass/Grass";

const StarBackground = () => {
  return (
    <div className="star_container">
      <div className="star_sheet" id="stars1"></div>
      <div className="star_sheet" id="stars2"></div>
      <div className="star_sheet" id="stars3"></div>
    </div>
  );
};
const DayBackground = () => {
  return (
    <>
      <Grass />
    </>
  );
};
interface Props {
  togClass: string;
}
export const Background: React.FC<Props> = ({ togClass }) => {
  return togClass === "light" ? <DayBackground /> : <StarBackground />;
};
