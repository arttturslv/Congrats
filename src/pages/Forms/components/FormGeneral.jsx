import { useRef } from "react";
import CustomInput from "../../../components/CustomInput";
import Line from "../../../components/Line";
import ImagesInputPreview from "./ImagesInputPreview";

export default function FormGeneral({
  data,
  setData,
  localFiles,
  setLocalFiles,
}) {
  const multipleInputRef = useRef(null);
  const individualInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function imageUpload(e, index) {
    if (!e.target.files) console.error("Imagem selecionada não é valida.");

    if (!index) {
      const files = Array.from(e.target.files).slice(0, 3);
      setLocalFiles(files);
    } else {
      let prevLocalFiles = [...localFiles];
      prevLocalFiles[index] = e.target.files[0];
      setLocalFiles(prevLocalFiles);
    }
  }

  function imageRemove(index) {
    if (index >= 0) {
      let prevLocalFiles = [...localFiles];
      let filesNotRemoved = prevLocalFiles.filter((el, i) => i != index);

      if (filesNotRemoved.length == 0) {
        console.log("Todas imagens removidas.");
        if (multipleInputRef.current) {
          multipleInputRef.current.value = "";
        }
        if (individualInputRef.current) {
          individualInputRef.current.value = "";
        }
      }

      setLocalFiles(filesNotRemoved);
    } else {
      console.error("Index indisponivel");
    }
  }

  return (
    <div className="space-y-2">

      <CustomInput
        label="Título"
        type="text"
        name="title"
        value={data.title}
        fn={handleChange}
        placeholder="Título"
        required
      />

      <CustomInput
        label="Qual seu nome"
        type="text"
        name="senderName"
        value={data.senderName}
        fn={handleChange}
        placeholder="Remetente"
        required
      />

      <CustomInput
        label="Para quem é"
        type="text"
        name="receiverName"
        value={data.receiverName}
        fn={handleChange}
        placeholder="Destinatário"
        required
      />

      <>
        <div className="w-full space-y-1">
          <p className="font-zig">Escolha as fotos (máx 3)<strong className="text-[#ff702e]">*</strong></p>
          <label
            htmlFor="fileInputMultiple"
            className="flex items-center cursor-pointer h-10 w-full bg-dark border-redHighlight border-4 px-3 py-1"
          >
            <p className="text-white text-left text-sm">
              {localFiles.length <= 0
                ? "Selecione seus arquivos"
                : "Arquivos selecionados: " + localFiles.length}
            </p>
          </label>
          <input
            ref={multipleInputRef}
            className="opacity-1 absolute h-[0px] w-[0px] -z-50"
            id="fileInputMultiple"
            type="file"
            name="fileInputMultiple"
            accept="image/*"
            multiple
            required={localFiles.length<=0}
            onChange={(e) => imageUpload(e)}
          />
        </div>

        <ImagesInputPreview
          CustomStyle={localFiles.length > 0 ? "relative  w-full opacity-1 pb-4 " : "h-[0px] opacity-0 absolute pb-0 w-[0px]"}
          imageRemove={imageRemove}
          imageUpload={imageUpload}
          files={localFiles}
          individualInputRef={individualInputRef}
        ></ImagesInputPreview>
      </>
      <Line></Line>

      <CustomInput
        label="Quando se conheceram"
        type="datetime-local"
        name="dateMet"
        value={data.dateMet}
        fn={handleChange}
        placeholder="dd/mm/aaaa"
      />

      <CustomInput
        label="Video do Youtube"
        type="text"
        name="youtubeURL"
        value={data.youtubeURL}
        fn={handleChange}
        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />

      <CustomInput label="Privado" name="passKey">
        <select
          className="w-full  bg-dark border-redHighlight border-4 px-3 py-1 h-10 placeholder:text-sm"
          type="checkbox"
          name="passKey"
          value={data.passKey}
          onChange={handleChange}
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
