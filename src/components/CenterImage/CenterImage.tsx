import React from "react";
import "./CenterImage.css";
import "./CenterImage.mediaquery.css";
interface Props {
  src1: string;
  href1: string;
  href2: string;
  imageSrc: string;
  imageAlt: string;
  mouseOnCenterImage: (arg1: boolean) => void;
}
const CenterImage: React.FC<Props> = ({
  src1,
  imageSrc,
  imageAlt,
  href1,
  href2,
  mouseOnCenterImage,
}) => {
  return (
    <div
      className="center-image"
      onMouseEnter={() => {
        mouseOnCenterImage(true);
      }}
      onMouseLeave={() => {
        mouseOnCenterImage(false);
      }}
    >
      <div
        className={`center-image-slides yellow options ${
          href1 ? "opacity1" : "opacity0"
        }`}
      >
        <a className="repository" href={href1}>
          <span>Repository</span>
        </a>
        <a className="demo" href={href2}>
          <span>Demo</span>
        </a>
      </div>
      <img
        src={src1}
        alt="profile"
        className={`${!href1 ? "opacity1" : "opacity0"} center-image-slides`}
      />
    </div>
  );
};

export default CenterImage;
