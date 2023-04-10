import "./home_text.scss";
import HexPopBackground from "./HexPopBackground";
const Home = () => {
  return (
    <section id="home">
      <header></header>
      <HexPopBackground />
      <div className="home_text_container">
        <h2>Hi my name is,</h2>
        <h1>Ben Piacitelli</h1>
        <h2>I am a front end web developer</h2>
        <p>I specialize in building accesible web applications </p>
      </div>
    </section>
  );
};
export default Home;
