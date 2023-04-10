import "./home_text.scss";
import HexPopBackground from "./HexPopBackground";
type Props = {
  children: JSX.Element;
};
const Home = ({ children }: Props) => {
  return (
    <>
      <section id="home">
        {/* <HexPopBackground /> */}
        <header></header>
        <div className="home_text_container">
          <h2>Hi my name is,</h2>
          <h1>Ben Piacitelli</h1>
          <h2>I am a front end web developer</h2>
          <p>I specialize in building accesible web applications </p>
        </div>
        {children}
      </section>
    </>
  );
};
export default Home;
