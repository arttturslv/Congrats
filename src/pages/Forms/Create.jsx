import { useState, useRef, useEffect } from "react";

import FormGeneral from "./components/FormGeneral";
import FormImages from "./components/FormDetails";
import Navbar from "../../components/Navbar";
import { HeaderProgress } from "./components/HeaderProgress";
import { postCard } from "../../hooks/useAPI";
import ShareInformation from "./components/ShareInformation";
import CustomButton from "../../components/CustomButton";
import CardViewer from "../Viewer/CardViewer";

import arrowIcon from "../../assets/images/arrow.png";

export default function Create() {
  const Form = useRef();

  const [pictures, setPictures] = useState([]);
  const [data, setData] = useState({
    title: "",
    senderName: "",
    receiverName: "",
    dateMet: "",
    pictures: pictures,
    passKey: false,
    youtubeURL: "",
  });
  const [formIndex, setFormIndex] = useState(0);
  const [localFiles, setLocalFiles] = useState([]);

  const [responseReturn, setResponseReturn] = useState(null);
  const [loadingRequest, setLoadingRequest] = useState(false);

  function updatePictures(newPictures) {
    setData((prevData) => ({
      ...prevData,
      pictures: newPictures,
    }));
  }

  useEffect(() => {
    updatePictures(pictures);
  }, [pictures]);

  async function sendForm(e) {
    e.preventDefault();

    if (responseReturn) {
      console.log("Já enviei o request: ", responseReturn);
      return;
    }
    setLoadingRequest(true);

    try {
      const response = await postCard(data);
      setResponseReturn(response);

      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingRequest(false)
    }
  }

  function handleNextForm(e) {
    e.preventDefault();

    if (!Form.current) {
      return;
    }

    if (Form.current.checkValidity()) {
      setFormIndex((prev) => prev + 1);
    } else {
      Form.current.reportValidity();
    }
  }

  function handlePreviousForm(e) {
    e.preventDefault();

    if (formIndex == 0) {
      return;
    }
    setFormIndex((prev) => prev - 1);
  }

  const formParts = [
    <FormGeneral
      setLocalFiles={setLocalFiles}
      localFiles={localFiles}
      data={data}
      setData={setData}
    />,

    <FormImages
      pictures={pictures}
      setPictures={setPictures}
      updatePictures={updatePictures}
      files={localFiles}
    />,

    <CardViewer card={data} teste={true} />
  ];

  return (
    <div className="overflow-x-hidden max-w-[600px] flex flex-col place-self-center">
      <div className=" px-4 overflow-x-hidden">
        <Navbar></Navbar>

        {!responseReturn && (
          <>
            <HeaderProgress index={formIndex}></HeaderProgress>
            <div id="form-creation">
              <form ref={Form} className="space-y-6 my-4">
                {formParts[formIndex]}
                {showRightButtons(
                  loadingRequest,
                  formIndex,
                  sendForm,
                  handleNextForm,
                  handlePreviousForm
                )}
              </form>
            </div>
          </>
        )}

        {responseReturn && (
          <ShareInformation data={responseReturn}></ShareInformation>
        )}
      </div>
    </div>
  );
}

function showRightButtons(
  loadingRequest,
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
          onClick={(e) => handlePreviousForm(e)}
        >
          <img
            className="fill-light size-4 group-hover:w-5 transition-all duration-400 rotate-180"
            src={arrowIcon}
            alt="arrow icon"
          />
        </CustomButton>
      )}

      {formIndex < 2 && (
        <CustomButton
          customStyle={"w-full group"}
          onClick={(e) => handleNextForm(e)}
        >
          <>
            Continuar
            <img
              className="fill-light size-4 group-hover:w-5 transition-all duration-400"
              src={arrowIcon}
              alt="arrow icon"
            />
          </>
        </CustomButton>
      )}

      {formIndex == 2 && (
        <CustomButton customStyle={"w-full group"} onClick={(e) => sendForm(e)}>
          {loadingRequest ? 
            <span className="animate-pulse">Enviando</span>
          :
          <span>Salvar</span>
        }
          
        </CustomButton>
      )}
    </div>
  );
}
