import React from "react";
import "./bubble.css";
import "./bubble.mediaquery.css";

interface BubbleProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
  onClick?: () => void;
}
const Bubble: React.FC<BubbleProps> = ({
  imageSrc,
  imageAlt,
  text,
  onClick,
}) => {
  return (
    <li className="bubble" onClick={onClick}>
      <div>
        <img className="bubble-image" src={imageSrc} alt={imageAlt} />
      </div>
      <p>{text}</p>
    </li>
  );
};

export default Bubble;
