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
      <div className="arm support-arm">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
          <div className="bolt"></div>
        ))}
      </div>
      <div className="arm connector-arm">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
          <div className="bolt"></div>
        ))}
      </div>
      <div className="image-container">
        <img className="bubble-image" src={imageSrc} alt={imageAlt} />
      </div>
      <p>{text}</p>
    </li>
  );
};

export default Bubble;
