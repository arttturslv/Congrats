import { useEffect, useState } from "react";
import { ImageView } from "../../components/ImageView";
import Line from '../../components/Line';

export default function FormImages({ images, setImages }) {
  function changeImagesInformation(id, type, data) {
    setImages((prev) => {
      let arr = prev.map((item) => {
        if (item.id == id) {
          return { ...item, [type]: data };
        }
        return item;
      });

      return [...arr];
    });
  }


  // const [imagesPreview, setImagesPreview] = useState([]);

  // useEffect(() => {
  //   // if(images) {
  //   //   //showImagePreview();
  //   // }
  // }, []);

  // function showImagePreview() {
  //   const filesReaders = images.map((item) => {
  //     return new Promise((res, rej) => {
  //       const reader = new FileReader();
  //       reader.onloadend = () => res(reader.result);
  //       reader.onerror = () => rej('Erro ao ler arquivo');
  //       reader.readAsDataURL(item.file)
  //     })
  //   })

  //   Promise.all(filesReaders).then((results) => setImagesPreview(results));
  // }

  return (
    images && (
      images.map((item, index) => {
        return (
          <>
          
          {formImageIndividual(item, index, changeImagesInformation, images)}
          <Line></Line>
          </>
        )
      }) 
    )
  );
}

function formImageIndividual (item, index, changeImagesInformation, images) {

  return (
    <div className="space-y-2">
      
        <ImageView title={item.title} key={index} date={item.date} image={images[index].file} />

        <div className="h-min w-full space-y-1">
          <label htmlFor="imageTitle1">Título da foto: </label>
          <input
            className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
            type="text"
            name="imageTitle1"
            id="imageTitle1"
            value={item.title}
            onChange={(e) =>
              changeImagesInformation(index, "title", e.target.value)
            }
            placeholder="Qual o evento da foto?"
          />
        </div>

        <div className="h-min w-full space-y-1">
          <label htmlFor="imageDate1">Data que foi tirada: </label>
          <input
            className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
            type="date"
            name="imageDate1"
            id="imageDate1"
            value={item.date}
            onChange={(e) => changeImagesInformation(index, "date", e.target.value)}
          />
        </div>

        <div className="h-min w-full space-y-1">
          <label htmlFor="imageDescription1">Descrição*: </label>
          <textarea
            className="w-full h-24 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
            type="text"
            name="imageDescription1"
            id="imageDescription1"
            value={item.description}
            onChange={(e) =>
              changeImagesInformation(index, "description", e.target.value)
            }
            placeholder="Fale sobre a pessoa, a foto, o momento, tudo que faz isso ser especial."
            required
          />
        </div>
      </div>
  )
}