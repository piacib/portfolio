import React from "react";
import Bubble from "../Bubble/Bubble";
import CenterImage from "../CenterImage/CenterImage";
type Passengers = {
  imageSrc: string;
  imageAlt: string;
  text: string;
};

interface Props {
  dataArray: Passengers[];
}
const FerrisWheel: React.FC<Props> = ({ dataArray }) => {
  return (
    <div className="orbit">
      <CenterImage src1="a" src2="b" />
      <ul>
        {dataArray.map((data) => (
          <Bubble
            imageSrc={data.imageSrc}
            imageAlt={data.imageAlt}
            text={data.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default FerrisWheel;
