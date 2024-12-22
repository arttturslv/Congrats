import CustomButton from "../../../components/CustomButton";

import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <div className="w-full sm:flex justify-between ">
      <div className="sm:w-[55%] space-y-3 flex-col flex justify-center">
        <h1 className="text-3xl font-zig">Um novo jeito de comemorar</h1>
        <p>Transforme momentos especiais em lembranças únicas!</p>
        <p>
          Com nosso app,<strong className="font-garetBold"> criar uma mensagem personalizada</strong>  é rápido e fácil! Para
          começar, basta clicar no botão abaixo, adicionar suas informações e
          pronto. Você pode <strong className="font-garetBold">incluir fotos, textos e até mesmo vídeo no YouTube</strong>, tornando
          sua mensagem única e inesquecível. Depois, <strong className="font-garetBold">compartilhe </strong> com quem você
          desejar, por meio de um link ou QR Code, e celebre seus momentos
          especiais de forma única.
          <strong className="font-garetBold">
            {" "}
            tornar cada fase ainda mais inesquecível.
          </strong>
        </p>
        <CustomButton customStyle={"max-w-72"} onClick={() => navigate("/create")}>
          Criar minha mensagem
        </CustomButton>
      </div>
      <div className="sm:w-[40%] flex justify-center items-center max-sm:pt-8">
        <img
          className="size-72 aspect-square"
          src="https://i.imgur.com/s3IrqQW.png"
          alt=""
        />
      </div>
    </div>
  );
}
