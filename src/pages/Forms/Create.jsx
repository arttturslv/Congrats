import { useState, useRef } from "react";

import FormGeneral from "./components/FormGeneral";
import FormImages from "./components/FormDetails";
import Navbar from "../../components/Navbar";
import { HeaderProgress } from "./components/HeaderProgress";
import { postCard } from "../../hooks/useAPI";
import ShareInformation from "../Viewer/ShareInformation";
import CustomButton from "../../components/CustomButton";
import Viewer from "../Viewer/Viewer";

export default function Create() {
  const Form = useRef();

  const [formIndex, setFormIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [dateMet, setDateMet] = useState("");
  const [images, setImages] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  const [shareInformation, setShareInformation] = useState(null);

  async function sendForm(e) {
    e.preventDefault();

    if (shareInformation) {
      console.log("Já enviei o request.");
      console.log("shareInformation: ", shareInformation);
      return;
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
      return;
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

  let cards = {
    dateMet: dateMet,
    easyId: "default",
    pictures: images,
    receiverName: receiverName,
    senderName: senderName,
    title: title
  };

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

    <Viewer card={cards} teste={true}/>,
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
              {showRightButtons(
                formIndex,
                sendForm,
                handleNextForm,
                handlePreviousForm
              )}
            </form>
          </div>
        </>
      )}

      {shareInformation && (
        <ShareInformation data={shareInformation}></ShareInformation>
      )}
    </div>
  );
}

function showRightButtons(
  formIndex,
  sendForm,
  handleNextForm,
  handlePreviousForm
) {
  return (
    <div className="flex gap-2">
      {formIndex > 0 && (
        <CustomButton
          customStyle={"w-[20%] group"}
          onClick={handlePreviousForm}
        >
          <img
            className="fill-light size-4 group-hover:w-5 transition-all duration-400 rotate-180"
            src="../src/assets/images/arrow.png"
            alt="arrow icon"
          />
        </CustomButton>
      )}

      {formIndex < 2 && (
        <CustomButton customStyle={"w-full group"} onClick={handleNextForm}>
          <>
            Continuar
            <img
              className="fill-light size-4 group-hover:w-5 transition-all duration-400"
              src="../src/assets/images/arrow.png"
              alt="arrow icon"
            />
          </>
        </CustomButton>
      )}

      {formIndex == 2 && (
        <CustomButton customStyle={"w-full group"} onClick={(e) => sendForm(e)}>
          Salvar
        </CustomButton>
      )}
    </div>
  );
}
