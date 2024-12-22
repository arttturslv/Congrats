import { useRef } from "react";
import html2canvas from "html2canvas";
import Line from "../../../components/Line";
import CustomButton from "../../../components/CustomButton";
import shareIcon from "../../../assets/images/share.png";
import giftBoxIcon from "../../../assets/images/gift-box.png";
import ballonBlue from "../../../assets/images/balloon-blue.png";
import ballonRed from "../../../assets/images/balloon-red.png";
import ballonYellow from "../../../assets/images/balloon-yellow.png";
import { Link } from "react-router-dom";
export default function ShareCard({ senderName, pictures, title, teste }) {
  const URL = window.location.href;

  const shareRef = useRef();

  const shareWithFriends = () => {
    html2canvas(shareRef.current)
      .then(function (canvas) {
        canvas.toBlob(function (blob) {
          const file = new File([blob], "Congrats-Presente.png", {
            type: "image/png",
          });

          const shareData = {
            files: [file],
            title: "Meu presente",
          };
          if (navigator.share) {
            navigator
              .share(shareData)
              .then(() => console.log("Presente compartilhado com sucesso!"))
              .catch((error) => console.log("Erro ao compartilhar:", error));
          } else {
            console.log("API não suportada.");

            // Fallback para navegadores que não suportam a API de compartilhamento
            navigator.clipboard
              .writeText(`Acesse o Congrats! -> ${URL}`)
              .then(() =>
                console.log("Link copiado para a área de transferência.")
              )
              .catch((error) =>
                console.error(
                  "Erro ao copiar para a área de transferência:",
                  error
                )
              );
          }
        }, "image/png");
      })
      .catch(function (error) {
        console.error("Erro ao converter div para canvas:", error);
      });
  };

  return (
    !teste && (
      <div className="flex items-center flex-col space-y-2">
        <p className="text-center font-zig pt-6">
          Que tal compartilhar com seus amigos?
        </p>
        <div
          ref={shareRef}
          className="relative h-[400px] w-[280px] flex flex-col justify-between pb-4 items-center bg-gradient-to-t from-[#0a0a0a] to-[#292929] border-redHighlight border-8"
        >
          <p className="w-full text-xs py-2 font-garet break-words text-center">
            {URL.replace("https://", "")}
          </p>
          <div className="w-[95%]">
            <div className="relative w-full h-24 flex items-center justify-center scale-[0.8]">
              <img
                src={ballonBlue}
                className="w-24 absolute left-[10%] top-2 drop-shadow-sm"
                alt="balão azul"
              />
              <img
                src={ballonYellow}
                className="w-24 absolute left-[30%] top-4 drop-shadow-sm"
                alt="balão amarelo"
              />
              <img
                src={ballonRed}
                className="w-24 absolute right-[10%] top-0 drop-shadow-sm"
                alt="balão vermelho"
              />
            </div>
            <div className="relative w-full h-36 flex items-center -space-x-1 justify-center scale-[0.90]">
              {pictures.map((item, index) => {
                if (pictures.length == 1) {
                  return (
                    <div key={index} style={{backgroundImage: `url(${item.file})`}}  className={`w-24 h-32 bg-cover bg-center border-redHighlight border-[6px] shadow-3xl` }/>
                  );
                }
                return (
                  <div
                  key={index}
                  style={{backgroundImage: `url(${item.file})`}}
                    className={` ${
                      index == 0
                        ? "-rotate-12 z-0 mt-6"
                        : index == pictures.length - 1
                        ? "rotate-12 z-0 mt-6"
                        : "z-50"
                    } w-24 h-32 bg-cover bg-center border-redHighlight border-[6px] shadow-3xl`}
                  >
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-3">
            <img
              src={giftBoxIcon}
              alt="caixa de presentes"
              className="size-6 absolute left-2 bottom-2"
            />
            <p className="font-zig text-center">{title}</p>
            <p className="font-zig text-center">- {senderName}</p>
          </div>
        </div>

        <div className="gap-2 py-4 flex items-center">
          <CustomButton>
            <Link to={"/create"}>Criar meu site</Link>
          </CustomButton>

          <CustomButton
            onClick={shareWithFriends}
            customStyle={"  px-3 py-2 pb-2"}
          >
            <img
              className="fill-light size-4 "
              src={shareIcon}
              alt="share icon"
            />
          </CustomButton>
        </div>
      </div>
    )
  );
}
