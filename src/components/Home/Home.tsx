import useInitialPageLoad from "../../utils/useInitialPageLoad";
import "./home_text.scss";
const Home = () => {
  const { loaded, initialLoadClassName } = useInitialPageLoad();

  return (
    <>
      <section id="home">
        <header></header>
        <div
          className={`home_text_container ${
            loaded ? "" : initialLoadClassName
          }`}
        >
          <h2>Hi my name is,</h2>
          <h1>Ben Piacitelli</h1>
          <h2>I am a front end web developer</h2>
          <p>I specialize in building accesible web applications </p>
        </div>
      </section>
    </>
  );
};
export default Home;
