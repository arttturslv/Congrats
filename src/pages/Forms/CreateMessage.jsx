import { Link } from "react-router-dom";
import { useEffect, useState, useRef, Component } from "react";

import FormGeneral from "./FormGeneral";
import FormPreview from "./FormPreview";
import FormImages from "./FormDetails";
import Navbar from "../../components/Navbar";
import { HeaderProgress } from "../../components/HeaderProgress";
import { postCard } from "../../hooks/useAPI";

export default function CreateMessage() {
  const location = window.location.href; // Obtém a URL completa

  const Form = useRef();

  const [formIndex, setFormIndex] = useState(0);
  const [title, setTitle] = useState();
  const [senderName, setSenderName] = useState();
  const [receiverName, setReceiverName] = useState();
  const [dateMet, setDateMet] = useState();
  const [images, setImages] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  const [shareInformation, setShareInformation] = useState(null);

  async function sendForm(e) {
    e.preventDefault();

    if (shareInformation) {
      console.log("Já enviei o request.");
      console.log("shareInformation: ", shareInformation);
    }

    try {
      console.log(title, senderName, receiverName, dateMet);
      console.dir(images);

      const resp = await postCard(
        title,
        senderName,
        receiverName,
        dateMet,
        images,
        isLocked
      );
      setShareInformation(resp);

      console.log(resp);
    } catch (error) {
      console.error(error);
    }
  }

  function handleNextForm() {
    if (!Form.current) {
      console.log("EERRR");
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

  const formParts = [
    <FormGeneral
      title={title}
      setTitle={setTitle}
      senderName={senderName}
      setSenderName={setSenderName}
      receiverName={receiverName}
      setReceiverName={setReceiverName}
      dateMet={dateMet}
      setDateMet={setDateMet}
      setIsLocked={setIsLocked}
      isLocked={isLocked}
      images={images}
      setImages={setImages}
    />,
    <FormImages images={images} setImages={setImages} />,

    <FormPreview
      title={title}
      senderName={senderName}
      receiverName={receiverName}
      images={images}
      setImages={setImages}
    />,
  ];

  return (
    <div className="px-5 h-[100dvh] max-w-[600px] flex flex-col place-self-center">
      <Navbar></Navbar>

      {!shareInformation && (
        <>
          <HeaderProgress index={formIndex}></HeaderProgress>

          <div id="form-creation ">
            <form ref={Form} className="space-y-6 my-4">
              {formParts[formIndex]}

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

                {formIndex < 2 && (
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
                )}
                {formIndex == 2 && (
                  <button
                    className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
                    id="continuar"
                    onClick={(e) => sendForm(e)}
                  >
                    <>Salvar</>
                  </button>
                )}
              </div>
            </form>
          </div>
        </>
      )}

      {shareInformation && (
        <>
          <h3 className="text-center py-6">Uhu! Agora é só compartilhar!</h3>
          <div className="flex flex-col items-center">
            <img
              className="size-72 bg-light m-3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt=""
            />
            <p>{location + "/" + shareInformation?.easyId}</p>
            {shareInformation?.passKey != null && (
              <p>
                A sua senha é: <strong>{shareInformation?.passKey}</strong>
              </p>
            )}

            <div className="flex gap-2 py-6">
              <button className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm">
                Compartilhar
                <img
                  className="fill-light size-4 "
                  src="../src/assets/images/share.png"
                  alt="share icon"
                />
              </button>

              <button className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm">
                QR-CODE
                <img
                  className="fill-light size-4 "
                  src="../src/assets/images/download.png"
                  alt="share icon"
                />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
