import React, { useEffect } from "react";
import "./App.css";
import "./normalize.css";
import { keepTheme } from "./utils/theme";
import FerrisWheel from "./components/FerrisWheel/FerrisWheel";
import Toggle from "./components/Toggle/Toggle";
import Grass from "./components/Grass/Grass";

function App() {
  useEffect(() => {
    keepTheme();
  });
  return (
    <div className="App">
      <Toggle />
      <FerrisWheel />
      <Grass />
    </div>
  );
}

export default App;
