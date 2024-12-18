import { useState, useRef } from "react";
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';

import shareIcon from "../../../assets/images/share.png";
import downloadIcon from "../../../assets/images/download.png"

export default function ShareInformation({ data }) {
  const location = window.location.href; // Obtém a URL completa
  const lastPartOfLocation = location.split('/').pop();

  const [aboutPassKey, setAboutPassKey] = useState("A sua senha é: ");

  const [url, setURL] = useState(location.substring(0, location.length - lastPartOfLocation.length) + data.easyId);

  const qrRef = useRef();

  const downloadQRCode = () => {
    html2canvas(qrRef.current).then((canvas) => {
      const imageUrl = canvas.toDataURL('image/png');
      
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'Congrats-qrCode.png';  
      link.click(); 
    });
  };

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(data.passKey);
      setAboutPassKey("A senha foi copiada: ");
    } catch (error) {
      console.log("Erro ao copiar passKey!");
      setAboutPassKey("Erro ao copiar: ");
    } finally {
      let timer = setTimeout(() => {
        setAboutPassKey("A sua senha é: ");
      }, 800);

      return () => clearTimeout(timer);
    }
  }

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          url: url,
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
      <h3 className="text-center pt-6">Uhu! Agora é só compartilhar!</h3>
      <div className="flex flex-col items-center">
        <div className="size-72 my-6 bg-light justify-center flex items-center" ref={qrRef}>
          <QRCode bgColor="#F0EFF4" value={url} size={250} />
        </div>

        <p className="text-sm">{url}</p>
        {data.passKey != null && (
          <p onClick={handleCopy} className="text-sm">
            {aboutPassKey}{" "}
            <strong className="text-[#f5dc6f]">{data.passKey}</strong>
          </p>
        )}

        <div className="flex gap-2 py-6">
          <button
            onClick={handleShare}
            className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          >
            Compartilhar
            <img
              className="fill-light size-4 "
              src={shareIcon}
              alt="share icon"
            />
          </button>

          <button onClick={(e)=>downloadQRCode(e)} className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm">
            QR-CODE
            <img
              className="fill-light size-4 "
              src={downloadIcon}
              alt="share icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}
