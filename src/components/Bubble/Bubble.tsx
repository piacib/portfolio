import React from "react";
import "./bubble.css";
import "./bubbleTranslate.css";
import "./bubble-background.css";
import "./bubble.mediaquery.css";

interface BubbleProps {
  href?: string;
  children?: JSX.Element;
  onClick?: () => void;
}
const Bubble: React.FC<BubbleProps> = ({ href, onClick, children }) => {
  return (
    <li className="bubble" onClick={onClick}>
      <a href={href}>
        <span className="dynamic-backgrnd"></span>
        {children}
      </a>
    </li>
  );
};

export default Bubble;
