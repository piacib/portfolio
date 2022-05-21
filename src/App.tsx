import React, { useEffect, useState } from "react";
import "./App.css";
import "./normalize.css";
import { keepTheme } from "./utils/theme";
import FerrisWheel from "./components/FerrisWheel/FerrisWheel";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const [x, setX] = useState<number | null>(null);
  const [y, setY] = useState<number | null>(null);
  const update = (e: MouseEvent) => {
    setX(e.x);
    setY(e.y);
  };
  useEffect(() => {
    window.addEventListener("click", (e) => update(e));
    return () => {
      window.removeEventListener("click", (e) => update(e));
    };
  }, [setX, setY]);
  useEffect(() => {
    keepTheme();
  });
  console.log(x, y);
  return (
    <div className="App">
      <Toggle />
      <FerrisWheel mousePosition={{ x, y }} />
    </div>
  );
}

export default App;
