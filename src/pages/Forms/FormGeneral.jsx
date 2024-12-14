import { useState } from "react";
import { compressImage } from "../../hooks/Images";

export default function FormGeneral({
  title,
  setTitle,
  senderName,
  setSenderName,
  setReceiverName,
  receiverName,
  dateMet,
  setDateMet,
  setIsLocked,
  isLocked,
  setImages,
}) {
  const [localFiles, setLocalFiles] = useState();

  async function handleImages(e) {
    if (!e.target.files[0]) {
      console.warn("Nenhuma imagem selecionada.");
      return;
    }
    setLocalFiles(e.target.value);

    let inputImages = [];

    for (let i = 0; i < e.target.files.length && i < 3; i++) {
      let fileCompressed = await compressImage(e.target.files[i]);

      const fileAs64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result); // Resolve a Base64 string
        reader.onerror = () => reject("Erro ao ler arquivo"); // Rejeita em caso de erro
        reader.readAsDataURL(fileCompressed);
      });

      if (i == 0) {
        console.log(e.target.files[0]);
        console.log(fileAs64);
      }

      if (fileAs64) {
        inputImages = [
          ...inputImages,
          {
            id: i,
            file: fileAs64,
            title: null,
            date: null,
            description: null,
          },
        ];
      }
    }
    setImages(inputImages);
  }

  return (
    <div className="space-y-2">
      <div className="h-min w-full space-y-1">
        <label htmlFor="title">Título:*</label>
        <input
          className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          required
        />
      </div>
      <div className="h-min w-full space-y-1">
        <label htmlFor="senderName">Qual seu nome?*</label>
        <input
          className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          type="text"
          name="senderName"
          id="senderName"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          placeholder="Destinatário"
          required
        />
      </div>
      <div className="h-min w-full space-y-1">
        <label htmlFor="receiverName">Para quem é?*</label>
        <input
          className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          type="text"
          name="receiverName"
          id="receiverName"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
          placeholder="Quem vai receber"
          required
        />
      </div>
      <div className="h-min w-full space-y-1">
        <label htmlFor="dateTimeMet">Quando se conheceram?</label>
        <input
          className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          type="datetime-local"
          name="dateTimeMet"
          id="dataMet"
          value={dateMet}
          onChange={(e) => setDateMet(e.target.value)}
          placeholder="dd/mm/aaaa"
        />
      </div>

      <div className="h-min w-full space-y-1">
        <label htmlFor="images">As fotos (máx 3):*</label>
        <input
          className="w-full file:hidden bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
          type="file"
          accept="image/*"
          multiple="3"
          name="images"
          id="images"
          value={localFiles}
          onChange={(e) => handleImages(e)}
          required
        />
      </div>
      <div className="h-min w-full space-y-1">
        <label htmlFor="isLocked">Privado?</label>

        <select
          className="w-full bg-dark border-redHighlight border-4 px-3 py-2.5 placeholder:text-sm"
          type="checkbox"
          name="dateTimeMet"
          id="isLocked"
          value={isLocked}
          onChange={(e) => setIsLocked(e.target.value)}
          placeholder="dd/mm/aaaa"
        >
          <option className="w-full bg-dark border-redHighlight border-4 px-3 py-2.5 placeholder:text-sm" value={true}>Sim</option>
          <option className="w-full bg-dark border-redHighlight border-4 px-3 py-2.5 placeholder:text-sm" value={false}selected>
            Não
          </option>
        </select>
      </div>
    </div>
  );
}
