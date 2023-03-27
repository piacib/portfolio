import React from "react";
import "./ExpandingPage.css";
export interface ExpandingPageProps {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode | React.ReactNode[];
}
const ExpandingPage: React.FC<ExpandingPageProps> = ({
  expand,
  setExpand,
  children,
}) => {
  return (
    <div className={expand ? "expand" : "display-none"}>
      <button className="exit-button" onClick={() => setExpand(false)}>
        x
      </button>
      {children}
    </div>
  );
};

export default ExpandingPage;
