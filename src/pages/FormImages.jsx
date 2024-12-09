import { useEffect, useState } from "react";

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


  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if(images) {
      showImagePreview();
    }
  }, []);

  function showImagePreview() {
    const filesReaders = images.map((item) => {
      return new Promise((res, rej) => {
        const reader = new FileReader();
        reader.onloadend = () => res(reader.result);
        reader.onerror = () => rej('Erro ao ler arquivo');
        reader.readAsDataURL(item.file)
      })
    })

    Promise.all(filesReaders).then((results) => setImagesPreview(results));
  }

  return (
    images && (
      images.map((item, index) => formImageIndividual(item, index, imagesPreview, changeImagesInformation)) 
    )
  );
}

function formImageIndividual (item, index, imagesPreview, changeImagesInformation) {
  return (
    <div className="space-y-2">
        <div className="size-72 place-self-center relative border-redHighlight border-[6px]">
          <div className="absolute w-full h-full bg-gradient-to-b to-dark/80 from-transparent"></div>
          <img
            className=" w-full h-full "
            src={imagesPreview[index]}
            alt="1º imagem do usuario"
          />
          <span className="absolute bottom-0 pl-4 pb-2">
            <h5>{item.title}</h5>
            <h6>{item.date}</h6>
          </span>
        </div>

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