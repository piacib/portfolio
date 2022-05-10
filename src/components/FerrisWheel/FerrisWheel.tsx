import React, { useEffect, useRef, useState } from "react";
import Bubble from "../Bubble/Bubble";
import CenterImage from "../CenterImage/CenterImage";
import Me from "../../assets/me.jpg";

type Passengers = {
  imageSrc: string;
  imageAlt: string;
  text: string;
  repoHref: string;
  demoHref: string;
};

interface Props {
  dataArray: Passengers[];
}

type Hrefs = {
  repoHref: string;
  demoHref: string;
  imageSrc: string;
  imageAlt: string;
};

const FerrisWheel: React.FC<Props> = ({ dataArray }) => {
  const [centerImageData, setCenterImageData] = useState<Hrefs>({
    repoHref: "",
    demoHref: "",
    imageSrc: "",
    imageAlt: "",
  });
  const [mouseOnCenterImage] = useState<boolean>(false);
  const mouseOnCenterImageRef = useRef(mouseOnCenterImage);
  mouseOnCenterImageRef.current = mouseOnCenterImage;

  const func = (mouseOnCenterImageRef: boolean) => {
    if (!mouseOnCenterImageRef) {
      setCenterImageData({
        repoHref: "",
        demoHref: "",
        imageSrc: "",
        imageAlt: "",
      });
    }
  };
  useEffect(() => {
    const clearImage = () =>
      setTimeout(() => func(mouseOnCenterImageRef.current), 5000);
    if (centerImageData.repoHref) {
      clearImage();
    }
    return () => {
      clearTimeout(clearImage());
    };
  }, [centerImageData.repoHref, mouseOnCenterImageRef]);
  return (
    <div className="orbit">
      <CenterImage
        mouseOnCenterImage={(arg1: boolean) =>
          (mouseOnCenterImageRef.current = arg1)
        }
        src1={Me}
        imageSrc={centerImageData.imageSrc}
        imageAlt={centerImageData.imageAlt}
        href1={centerImageData.repoHref}
        href2={centerImageData.demoHref}
      />
      <ul>
        {dataArray.map((data) => (
          <Bubble
            onClick={() => {
              setCenterImageData({
                repoHref: data.repoHref,
                imageSrc: data.imageSrc,
                imageAlt: data.imageAlt,
                demoHref: data.demoHref,
              });
            }}
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
