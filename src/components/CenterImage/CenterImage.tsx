import React from "react";
import "./CenterImage.css";
import "./CenterImage.mediaquery.css";
interface Props {
  src1: string;
}
const CenterImage: React.FC<Props> = ({ src1 }) => {
  return (
    <div className="center-image">
      <img
        src={src1}
        alt="profile"
        className={` center-image-slides octagon`}
      />
    </div>
  );
};

export default CenterImage;
