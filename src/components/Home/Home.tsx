import { useMode } from "../../utils/useMode";
import FerrisWheel from "../FerrisWheel/FerrisWheel";
import Toggle from "../Toggle/Toggle";
import Circle from "./Circle";
// import "./home.css";
import "./home_text.scss";
import "./home_background.scss";
const Home = () => {
  const { togClass, handleChange } = useMode();

  return (
    <section id="home">
      <header>
        {/* <Toggle togClass={togClass} handleChange={handleChange} /> */}
      </header>
      <HomeBackground />
      <div className="home_text_container">
        <h2>Hi my name is,</h2>
        <h1>Ben Piacitelli</h1>
        <h2>I am a front end web developer</h2>
        <p>I specialzes in building accesible web applications </p>
      </div>
      {/* <FerrisWheel /> */}
    </section>
  );
};
export default Home;
const HomeBackground = () => {
  return (
    <>
      {/* <div className="home_background">
        <div className="background_hexagon"></div>
      </div>
      <div className="home_background">
        <div className="background_hexagon"></div>
      </div>
      <div className="home_background">
        <div className="background_hexagon"></div>
      </div>
      <div className="home_background">
        <div className="background_hexagon"></div>
      </div>
      <div className="home_background">
        <div className="background_hexagon"></div>
      </div>
      <div className="home_background">
        <div className="background_hexagon"></div>
      </div> */}
      {/* <div className="home_background">
        <div className="background_hexagon"></div>
      </div>
      <div className="home_background">
        <div className="background_hexagon"></div>
      </div> */}
    </>
  );
};
