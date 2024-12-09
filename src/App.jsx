import { Link } from "react-router-dom";
import { useState } from "react";
function App() {
  const [title, setTitle] = useState("");
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [dateMet, setDateMet] = useState("");
  const [timeMet, setTimeMet] = useState("");
  const [images, setImages] = useState([]);

  return (
    <div className="px-5 py-8 h-[100dvh]">
      <Link
        id="page-header"
        to={"/"}
        className="flex items-center gap-1 justify-center hover:text-redHighlight transition-colors duration-300"
      >
        <img
          className="size-8"
          src="../src/assets/images/gift-box.png"
          alt="gift box icon"
        />
        <h1 className="text-3xl">Congrats</h1>
      </Link>
      <div className="bg-greyHighlight h-0.5 mx-8 my-2"></div>

      <div id="header-creation">
        <h2 className="text-xl">Vamos começar!</h2>
        <p className="text-xs">Preencha com os dados iniciais</p>

        <div className="relative flex justify-between items-center">
          <div className="absolute -z-10 bg-greyHighlight w-full h-1.5 my-2"></div>
          <div className="bg-redHighlight w-3.5 h-3.5 my-2"></div>
          <div className="bg-greyHighlight w-3.5 h-3.5 my-2"></div>
          <div className="bg-greyHighlight w-3.5 h-3.5 my-2"></div>
        </div>
      </div>

      <div id="form-creation">
        <form className="space-y-2 my-4" action="#">
          <div className="h-min w-full space-y-1">
            <label htmlFor="title">Título:*</label>
            <input
              className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Remetente"
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
            <label htmlFor="dateTimeMet">Quando se conheceram?*</label>
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
            <label htmlFor="images">Escolha as fotos (máx 3):*</label>
            <input
              className="w-full file:hidden bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
              type="file"
              accept="image/*"
              multiple="3"
              name="images"
              id="images"
              value={images}
              onChange={(e) => setImages(e.target.value)}
              required
            />
          </div>
        </form>

        <div className="h-min w-full space-y-1">
          <button
            className="w-full flex justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
            id="continuar"
          >
            Continuar
            <img
              className="fill-light size-4 group-hover:w-5 transition-all duration-400"
              src="../src/assets/images/arrow.png"
              alt="arrow icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
