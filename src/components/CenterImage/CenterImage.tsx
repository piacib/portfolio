import React from "react";
import "./CenterImage.css";
import "./CenterImage.mediaquery.css";
interface Props {
  src1: string;
  href1: string;
  href2: string;
  imageSrc: string;
  imageAlt: string;
}
const CenterImage: React.FC<Props> = ({
  src1,
  imageSrc,
  imageAlt,
  href1,
  href2,
}) => {
  const imgZindex = !href1 ? "" : "background";
  return (
    <div className="center-image">
      <div className="children profile-image yellow options">
        {href1 ? <a href={href1}>Repository</a> : null}
        <img src={imageSrc} alt={imageAlt} />
        {href2 ? <a href={href2}>Demo</a> : null}
      </div>
      <img
        src={src1}
        alt="profile"
        className={`${imgZindex} children profile-image`}
      />
    </div>
  );
};

export default CenterImage;
