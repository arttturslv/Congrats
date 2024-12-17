import { div } from "motion/react-client";
import Line from "../../../components/Line";
import { formataURL } from "../../../hooks/Utils";

export default function VideoIframe({ URL, teste }) {


  if(formataURL(URL)) {
    return (
      <>
        <div className="overflow-hidden relative w-[90%] h-[90%] pt-[45.25%] self-center place-self-center">
          <iframe
            className="w-full h-full absolute left-0 top-0 self-center"
            src={`${formataURL(URL)}?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1`}
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <Line></Line>
      </>
    )
  } else if(!formataURL(URL) && teste) {
    return (
      <div>
        <p className="text-sm text-redHighlight">URL inválida ou vídeo não encontrado: "{URL}" *</p>
      </div>
    )
  }
}
