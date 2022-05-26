import React from "react";
import "./grass.css";
const Grass = () => {
  let blades = [];
  for (let i = 0; i < 150; i++) {
    blades.push(<div className="blade"></div>);
  }
  return <div className="grass">{blades}</div>;
};

export default Grass;
