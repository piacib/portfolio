import React from "react";
import "./bubble.css";
import "./bubble.mediaquery.css";

interface Props {
  firstBubble: boolean;
}
const SupportBeams: React.FC<Props> = ({ firstBubble = false }) => {
  return (
    <>
      <div className="arm support-arm">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x, idx) => (
          <div key={"support" + idx} className="bolt"></div>
        ))}
      </div>
      {firstBubble && (
        <div className="arm connector-arm">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x, idx) => (
            <div key={"support" + idx} className="bolt"></div>
          ))}
        </div>
      )}
      <div className="arm connector-arm">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x, idx) => (
          <div key={"connector" + idx} className="bolt"></div>
        ))}
      </div>
    </>
  );
};
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
        {/* <SupportBeams firstBubble={firstBubble} /> */}
        <div className="image-container">
          <img className="bubble-image" src={imageSrc} alt={imageAlt} />
        </div>
        <p>{text}</p>
      </a>
    </li>
  );
};

export default Bubble;
