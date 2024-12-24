import CustomButton from "../../../components/CustomButton";

import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <div className="sm:flex justify-between  mx-4 md:text-mx-8 lg:mx-16 ">
      <div className="sm:w-[55%] pt-2 space-y-3 flex-col flex justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  font-zig">Um novo jeito de comemorar</h1>
        <p>
        Quem cria e quem recebe vivenciam momentos únicos, podendo compartilhar essas lembranças nas redes sociais de forma especial!
        </p>
        <CustomButton
          customStyle={"max-w-72 max-sm:flex max-sm:self-center shadow-4xl shadow-redHighlight/40"}
          onClick={() => navigate("/create")}
        >
          Criar minha mensagem
        </CustomButton>
      </div>
      <div className="sm:w-[48%] pt-4 flex justify-center items-center">
        <img
          className="drop-shadow-2xl "
          src="https://i.imgur.com/n1tNBKn.png"
          alt="mockups do site"
        />
      </div>
    </div>
  );
}
