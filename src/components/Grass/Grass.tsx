import React from "react";
import "./grass.css";
const Grass = () => {
  let blades = [];
  for (let i = 0; i < 100; i++) {
    blades.push(<div key={i} className="blade"></div>);
  }
  return <div className="grass">{blades}</div>;
};

export default Grass;
