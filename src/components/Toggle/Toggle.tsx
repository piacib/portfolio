import React, { useEffect, useState } from "react";
import "./toggle.css";


// to adjust toggle size set font-size
interface Props {
  togClass: string;
  handleChange: () => void;
}
const Toggle: React.FC<Props> = ({ togClass, handleChange }) => {
  // const { togClass, handleChange } = useMode();

  return (
    <div className="container_toggle">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox"
        onChange={handleChange}
        checked={togClass === "light" ? true : false}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-label-background"></span>
      </label>
    </div>
  );
};

export default Toggle;
