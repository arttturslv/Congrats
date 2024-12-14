import { useState } from "react";

export default function ShareInformation ({data}) {
  const location = window.location.href; // Obtém a URL completa

  const [aboutPassKey, setAboutPassKey] = useState("A sua senha é: ")

  const url = location.substring(0, location.length-6) + data?.easyId;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(data.passKey);
      setAboutPassKey("A senha foi copiada: ")
    } catch (error) { 
      console.log("Erro ao copiar passKey!")
      setAboutPassKey("Erro ao copiar: ")
    } finally {
       let timer = setTimeout(() => {
        setAboutPassKey("A sua senha é: ");
       }, 800)

       return () => clearTimeout(timer);

    }
  }

  async function handleShare() {
    // Verifica se a API de compartilhamento é suportada
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Tenho uma mensagem pra você",  // Título
          text: data.passKey,                    // Texto a ser compartilhado
          url: url                                // URL a ser compartilhada
        });
        console.log("Compartilhado com sucesso!");
      } catch (error) {
        console.warn("Erro ao compartilhar", error);
      }
    } else {
      console.log("Compartilhamento não é suportado neste navegador.");
    }
  }
    return (
        <>
        <h3 className="text-center py-6">Uhu! Agora é só compartilhar!</h3>
        <div className="flex flex-col items-center">
          <img
            className="size-72 bg-light m-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
            alt=""
          />
          <p className="text-sm">{url}</p>
          {data?.passKey != null && (
            <p onClick={handleCopy} className="text-sm">
              {aboutPassKey} <strong className="text-[#f5dc6f]">{data?.passKey}</strong>
            </p>
          )}

          <div className="flex gap-2 py-6">
            <button onClick={handleShare} className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm">
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
    )
}