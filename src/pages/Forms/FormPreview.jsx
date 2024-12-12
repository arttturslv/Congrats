import { useEffect, useState } from "react";
import ImageCaption from "../Viewer/ImageCaption";

export default function FormPreview({
  title,
  senderName,
  receiverName,
  images,
}) {

  return (
    <>
      <div>
        <h3>
          {title}, {receiverName}
        </h3>
        <h5 className="text-xs">De: {senderName}</h5>
      </div>

      {images &&
        images.map((item, index) => {
          console.log("item: ", item)
          return <ImageCaption title={item?.title} date={item?.date} description={item?.description} image={item?.file} key={index}></ImageCaption>
          })}
    </>
  );
}
