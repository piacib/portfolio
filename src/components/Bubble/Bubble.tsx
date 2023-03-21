import React from "react";
import "./bubble.css";
import "./bubble.mediaquery.css";

interface BubbleProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
  href: string;
  firstBubble?: boolean;
  onClick?: () => void;
}
const Bubble: React.FC<BubbleProps> = ({
  imageSrc,
  imageAlt,
  text,
  href,
  firstBubble = false,
  onClick,
}) => {
  return (
    <li className="bubble" onClick={onClick}>
      <a href={href}>
        <div className="image-container">
          <span className="dynamic-backgrnd"></span>
          <img className="bubble-image" src={imageSrc} alt={imageAlt} />
        </div>
      </a>
    </li>
  );
};

export default Bubble;
