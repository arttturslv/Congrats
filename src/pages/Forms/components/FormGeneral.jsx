import { useState } from "react";
import { compressImage } from "../../../hooks/Images";
import CustomInput from "../../../components/CustomInput";
import Line from "../../../components/Line";

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
  youtubeURL,
  setYoutubeURL
}) {
  const [localFiles, setLocalFiles] = useState('');

  async function handleImages(e) {
    console.log(e.target);

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
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = () => reject("Erro ao ler arquivo");
        reader.readAsDataURL(fileCompressed);
      });

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
    <div className="space-y-2 ">
      <CustomInput
        label="Título*"
        type="text"
        name="title"
        value={title}
        fn={(e) => setTitle(e.target.value)}
        placeholder="Título"
        required
      />

      <CustomInput
        label="Qual seu nome*"
        type="text"
        name="senderName"
        value={senderName}
        fn={(e) => setSenderName(e.target.value)}
        placeholder="Remetente"
        required
      />

      <CustomInput
        label="Para quem é*"
        type="text"
        name="receiverName"
        value={receiverName}
        fn={(e) => setReceiverName(e.target.value)}
        placeholder="Destinatário"
        required
      />

      <CustomInput
        customStyle={"file:hidden"}
        label="Escolha as fotos (máx 3)*"
        type="file"
        name="files"
        accept="image/*"
        multiple="3"
        value={localFiles}
        fn={(e) => handleImages(e)}
        required
      />

      <Line></Line>

      <CustomInput
        label="Quando se conheceram"
        type="datetime-local"
        name="dateTimeMetF"
        value={dateMet}
        fn={(e) => setDateMet(e.target.value)}
        placeholder="dd/mm/aaaa"
      />

      <CustomInput
        label="Video do Youtube"
        type="text"
        name="youtubeURL"
        value={youtubeURL}
        fn={(e) => setYoutubeURL(e.target.value)}
        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />

      <CustomInput label="Privado" name="isLocked">
        <select
          className="w-full  bg-dark border-redHighlight border-4 px-3 py-1 h-10 placeholder:text-sm"
          type="checkbox"
          name="dateTimeMet"
          id="isLocked"
          value={isLocked}
          onChange={(e) => setIsLocked(e.target.value)}
          placeholder="dd/mm/aaaa"
        >
          <option
            className="w-full bg-dark border-redHighlight border-4 px-3 py-2.5  h-10  placeholder:text-sm"
            value={true}
          >
            Sim
          </option>
          <option
            className="w-full bg-dark border-redHighlight border-4 px-3 py-2.5  h-10  placeholder:text-sm"
            value={false}
          >
            Não
          </option>
        </select>
      </CustomInput>
    </div>
  );
}
