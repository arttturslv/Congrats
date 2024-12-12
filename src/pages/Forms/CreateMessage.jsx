import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import FormGeneral from "./FormGeneral";
import FormPreview from "./FormPreview";
import FormImages from "./FormImages";
import Navbar from "../../components/Navbar";
import { HeaderProgress } from "../../components/HeaderProgress";
import { postCard } from "../../hooks/useAPI";
export default function CreateMessage() {
  const Form = useRef();

  const [formIndex, setFormIndex] = useState(0);

  const [title, setTitle] = useState();
  const [senderName, setSenderName] = useState();
  const [receiverName, setReceiverName] = useState();
  const [dateMet, setDateMet] = useState();
  const [images, setImages] = useState([]);


  async function sendForm(e) {
    e.preventDefault()
    try {

      console.log(title, senderName, receiverName, dateMet)
      console.dir(images)

      const resp = await postCard(title, senderName, receiverName, dateMet, images);

      console.log(resp);

    } catch (error) {
        console.error(error)
    }
  }

  function handleNextForm() {
    if (!Form.current) {
      console.log("EERRR")
      return;
    }

    if (formIndex == 2) {
      console.log("Enviando request");
    }

    if (Form.current.checkValidity()) {
      setFormIndex((prev) => prev + 1);
    } else {
      Form.current.reportValidity();
    }
  }

  function handlePreviousForm() {
    if (formIndex == 0) {
      return;
    }
    setFormIndex((prev) => prev - 1);
  }

  return (
    <div className="px-5 h-[100dvh] max-w-[600px] flex flex-col place-self-center">
      <Navbar></Navbar>

      <HeaderProgress index={formIndex}></HeaderProgress>

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
            <FormImages images={images} setImages={setImages} />
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
            {formIndex > 0 && (
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
            )}

            {formIndex<2 && (
              <button
                className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
                id="continuar"
                onClick={handleNextForm}
              >
                <>
                  Continuar
                  <img
                    className="fill-light size-4 group-hover:w-5 transition-all duration-400"
                    src="../src/assets/images/arrow.png"
                    alt="arrow icon"
                  />
                </>
              </button>
            )
           } 
            {formIndex==2 && (
              <button
                className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
                id="continuar"
                onClick={(e) => sendForm(e)}
              >
                <>
                  Compartilhar
                  <img
                    className="fill-light size-4 "
                    src="../src/assets/images/share.png"
                    alt="share icon"
                  />
                </>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
