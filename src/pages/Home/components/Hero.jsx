import CustomButton from "../../../components/CustomButton";
import { useState, useEffect } from "react";
import { getCardQuantity } from "../../../hooks/useAPI";

export default function Hero() {
  const [quantityOfUsers, setQuantityOfUsers] = useState(null);

  useEffect(() => {
    const fetchQuantityUsers = async () => {
      try {
        const data = await getCardQuantity();
        console.log(data);
        setQuantityOfUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (quantityOfUsers == null) {
      fetchQuantityUsers();
    }
  }, []);

  return (
    <div className="w-full sm:flex justify-between ">
      <div className="sm:w-[55%] space-y-4">
        <h1 className="text-3xl  font-zig">Um novo jeito de comemorar</h1>
        <p className="text-sm">
          Transforme momentos especiais em lembranças únicas!
        </p>
        <p className="text-sm">
          Mais de {quantityOfUsers} pessoas já usaram nosso site para celebrar
          ocasiões como aniversários, amizades, Natal e outros momentos
          marcantes. Adicione fotos, mensagens e detalhes personalizados para
          tornar cada fase ainda mais inesquecível.
        </p>
        <CustomButton onClick={() => alert("aeaiei")}>
          Criar minha mensagem
        </CustomButton>
      </div>
      <div className="sm:w-[40%] flex justify-center max-sm:pt-8">
        <img
          className="size-72 aspect-square"
          src="https://i.imgur.com/s3IrqQW.png"
          alt=""
        />
      </div>
    </div>
  );
}