import { useRef } from "react";
import html2canvas from "html2canvas";
import Line from "../../../components/Line";
import CustomButton from "../../../components/CustomButton";

export default function ShareCard({
  senderName,
  receiverName,
  pictures,
  title,
}) {
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
            const url = window.location.href;
            navigator.clipboard
              .writeText(`Acesse o Congrats! -> ${url}`)
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
    <div className="flex items-center flex-col space-y-2">
      <p className="text-center font-zig pt-6">
        Que tal compartilhar com seus amigos?
      </p>
      <div
        ref={shareRef}
        className="relative h-[400px] w-[280px] flex flex-col justify-between pb-4 items-center rounded-lg bg-gradient-to-t from-[#000] to-[#292929] border-redHighlight border-8"
      >
        <p className="w-full text-xs py-2 font-garet break-words text-center">
          {URL}
        </p>
        <div className="w-[95%]">
          <div className="relative w-full h-24 flex items-center justify-center scale-[0.8]">
            <img
              src="/src/assets/images/balloon-blue.png"
              className="w-24 absolute left-[10%] top-2 drop-shadow-sm"
              alt="balão azul"
            />
            <img
              src="/src/assets/images/balloon-yellow.png"
              className="w-24 absolute left-[30%] top-4 drop-shadow-sm"
              alt="balão amarelo"
            />
            <img
              src="/src/assets/images/balloon-red.png"
              className="w-24 absolute right-[10%] top-0 drop-shadow-sm"
              alt="balão vermelho"
            />
          </div>
          <div className="relative w-full h-36 flex items-center -space-x-2 justify-center scale-[0.85]">
            {pictures.map((item, index) => {
              if(pictures.length==1) {
                return (
                  <img
                    src={item.file}
                    className={` w-24 h-32 border-redHighlight border-[6px] shadow-3xl object-cover`}
                    alt={`imagem do usuario ${index}`}
                  />
                );
              }
              return (
                <img
                  src={item.file}
                  className={` ${index==0? "-rotate-12 mt-6" : index==pictures.length-1? "rotate-12 mt-6" : "z-10"} object-cover  w-24 h-32 border-redHighlight border-[6px] shadow-3xl`}
                  alt={`imagem do usuario ${index}`}
                  />
              );
            })}
          </div>
        </div>
        <div className="space-y-3">
          <img
            src="/src/assets/images/gift-box.png"
            alt="caixa de presentes"
            className="size-6 absolute left-2 bottom-2"
          />
          <p className="font-zig text-center">
            {title}, {receiverName}
          </p>
          <p className="font-zig text-center">- {senderName}</p>
        </div>
      </div>

      <CustomButton onClick={shareWithFriends}>COMPARTILHAR</CustomButton>
    </div>
  );
}
