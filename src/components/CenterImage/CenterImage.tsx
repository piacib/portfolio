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
  backgroundColor?: string;
}
const CenterImage: React.FC<Props> = ({
  src1,
  imageSrc,
  imageAlt,
  href1,
  href2,
  mouseOnCenterImage,
  backgroundColor = "",
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
        className={`center-image-slides options ${
          href1 ? "opacity1" : "opacity0"
        }`}
      >
        {href1 ? (
          <a className={`repository ${backgroundColor}`} href={href1}>
            <span>Repository</span>
          </a>
        ) : null}
        {href2 ? (
          <a className={`demo ${backgroundColor}`} href={href2}>
            <span>Demo</span>
          </a>
        ) : null}
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
