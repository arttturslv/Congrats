import { useEffect, useState } from "react";
import { ImageView } from "../../../components/ImageView";
import Line from "../../../components/Line";
import CustomInput from "../../../components/CustomInput";
import {toImage64Compressed} from '../../../hooks/Images';

export default function FormImages({ pictures, setPictures, files, updatePictures }) {
  function changeImagesInformation(id, type, data) {
    setPictures((prev) => {
      let arr = prev.map((item) => {
        if (item.id == id) {
          return { ...item, [type]: data };
        }
        return item;
      });
      return [...arr];
    });
  }

  useEffect(() => {
    
    if(!pictures) {
      console.warn("pictures is not null");
      return;
    }

    const firstLoading = async () => {
      const pics = [];

      for(let i=0; i<files.length; i++) {
        let imageFile = await toImage64Compressed(files[i]);
        pics.push({
          id: i,
          title: '',
          date: undefined,
          description: '',
          file: imageFile
        })
      }
      setPictures(pics);
    }

    firstLoading();
  }, [files])


  return (
    pictures &&
    pictures.map((item, index) => {
      return (
        <div key={index}>
          {formImageIndividual(item, index, changeImagesInformation)}
          <Line></Line>
        </div>
      );
    })
  );
}

function formImageIndividual(item, index, changeImagesInformation) {
  return (
    <div  className="space-y-2 ">
      <ImageView
        title={item.title}
        key={index}
        date={item.date}
        image={item.file}
      />

      <CustomInput
        label="Título da foto"
        type="text"
        name={"imageTitle" + index}
        value={item.title}
        fn={(e) => changeImagesInformation(index, "title", e.target.value)}
        placeholder="Dê um nome chamativo."
      />
      <CustomInput
        label="Data que foi tirada"
        type="date"
        name={"imageDate" + index}
        value={item.date}
        fn={(e) => changeImagesInformation(index, "date", e.target.value)}
        placeholder="Adicione para dar mais detalhes"
      />

      <CustomInput required label="Descrição" name={"imageDescription" + index}>
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
      </CustomInput>
    </div>
  );
}
