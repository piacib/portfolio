import React from "react";
import "./CenterImage.css";
interface Props {
  src1: string;
  src2: string;
}
const CenterImage: React.FC<Props> = ({ src1, src2 }) => {
  return (
    <div className="center-image">
      <img src={src1} alt="profile" className="profile-image" />
      <img src={src2} alt="profile" className="profile-image yellow" />
    </div>
  );
};

export default CenterImage;
