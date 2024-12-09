import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import FormGeneral from "./FormGeneral";
import FormPreview from "./FormPreview";
import FormImages from "./FormImages";

export function CreateMessage() {
  const Form = useRef();

  const [formIndex, setFormIndex] = useState(0);

  const [title, setTitle] = useState();
  const [senderName, setSenderName] = useState();
  const [receiverName, setReceiverName] = useState();
  const [dateMet, setDateMet] = useState();
  const [images, setImages] = useState([]);
  const [imagesInformation, setImagesInformation] = useState([]);

  useEffect(() => {
    console.dir(images)
  }, [images])

  function handleNextForm() {
    if (!Form.current) return;

    if (formIndex == 2) {
      console.log("Enviar request");
      return;
    }

    if (Form.current.checkValidity()) {
      console.log("Valido");

      setFormIndex((prev) => prev + 1);
    } else {
      console.log("invalido");

      Form.current.reportValidity();
    }
  }

  function handlePreviousForm() {
    if (formIndex == 0) {
      console.log("Inicio dos forms");
      return;
    }

    setFormIndex((prev) => prev - 1);
  }

  return (
    <div className="px-5 py-8 h-[100dvh] max-w-[600px] flex flex-col place-self-center">
      <Link
        id="page-header"
        to={"/"}
        className="flex items-center gap-1 justify-center hover:text-redHighlight transition-colors duration-300"
      >
        <img
          className="size-8"
          src="../src/assets/images/gift-box.png"
          alt="gift box icon"
        />
        <h1 className="text-3xl">Congrats</h1>
      </Link>
      <div className="bg-greyHighlight h-0.5 mx-8 my-2"></div>

      <div id="header-creation">
        <h2 className="text-xl">Vamos começar!</h2>
        <p className="text-xs">Preencha com os dados iniciais</p>

        <div className="relative flex justify-between items-center">
          <div className="absolute -z-10 bg-greyHighlight w-full h-1.5 my-2"></div>
          <div className="bg-redHighlight w-3.5 h-3.5 my-2"></div>
          <div className="bg-greyHighlight w-3.5 h-3.5 my-2"></div>
          <div className="bg-greyHighlight w-3.5 h-3.5 my-2"></div>
        </div>
      </div>

      <div id="form-creation ">
        <form ref={Form} className="space-y-6 my-4">
          {formIndex == 0 && (
            <FormGeneral
              title={title}
              setTitle={setTitle}
              senderName={senderName}
              setSenderName={setSenderName}
              receiverName={receiverName}
              setReceiverName={setReceiverName}
              dateMet={dateMet}
              setDateMet={setDateMet}
              images={images}
              setImages={setImages}
            />
          )}

          {formIndex == 1 && (
            <FormImages
              images={images}
              setImages={setImages}
            />
          )}

          {formIndex == 2 && (
            <FormPreview
              title={title}
              senderName={senderName}
              receiverName={receiverName}
              images={images}
              setImages={setImages}
            />
          )}

          <div className="flex gap-2">
            <div
              className="w-[20%] flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
              id="voltar"
              onClick={handlePreviousForm}
            >
              <img
                className="fill-light size-4 group-hover:w-5 transition-all duration-400 rotate-180"
                src="../src/assets/images/arrow.png"
                alt="arrow icon"
              />
            </div>
            <button
              className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
              id="continuar"
              onClick={handleNextForm}
            >
              Continuar
              <img
                className="fill-light size-4 group-hover:w-5 transition-all duration-400"
                src="../src/assets/images/arrow.png"
                alt="arrow icon"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
