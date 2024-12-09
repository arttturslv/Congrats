import { useEffect, useState } from "react";
import ImageCaption from "../Viewer/ImageCaption";

export default function FormPreview({
  title,
  senderName,
  receiverName,
  images,
}) {
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (images) {
      showImagePreview();
    }
  }, []);

  function showImagePreview() {
    const filesReaders = images.map((item) => {
      console.log(item);
      return new Promise((res, rej) => {
        const reader = new FileReader();
        reader.onloadend = () => res(reader.result);
        reader.onerror = () => rej("Erro ao ler arquivo");
        reader.readAsDataURL(item.file);
      });
    });

    Promise.all(filesReaders).then((results) => setImagesPreview(results));
  }

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
          console.log(item);
          return <ImageCaption title={item?.title} date={item?.date} description={item?.description} imagePreview={imagesPreview[index]} key={index}></ImageCaption>
          })}
    </>
  );
}

function FormPreviewSingular(image, imagesPreview, index) {
  return (
    <div key={index} className="space-y-2">
      <div className="size-72 place-self-center relative border-redHighlight border-[6px]">
        <div className="absolute w-full h-full bg-gradient-to-b to-dark/80 from-transparent"></div>
        <img
          className=" w-full h-full "
          src={imagesPreview[index]}
          alt="1º imagem do usuario"
        />
        <span className="absolute bottom-0 pl-4 pb-2">
          <h5>{image?.title}</h5>
          <h6>{image?.date}</h6>
        </span>
      </div>
      <p className="text-xs max-w-[400px]">{image?.description}</p>
    </div>
  );
}
