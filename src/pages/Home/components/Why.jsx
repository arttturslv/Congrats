import { useState, useEffect } from "react";
import { getCardQuantity } from "../../../hooks/useAPI";
import Line from "../../../components/Line";

export default function Why() {
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
    <div className="space-y-3 text-base">
      <h1 className="text-xl font-zig">Por que criar uma lembrança única?</h1>
      <p>
        Mais de <strong className="font-garetBold">{quantityOfUsers} pessoas</strong> já utilizaram nosso site para <strong className="font-garetBold">celebrar
        momentos especiais</strong>. Seja para marcar um aniversário, uma amizade ou
        datas especiais, você pode adicionar um <strong className="font-garetBold">toque pessoal</strong> que vai tornar
        essa lembrança ainda mais inesquecível.
      </p>
      <p>
      <strong className="font-garetBold">Crie uma mensagem única</strong>, adicione suas fotos e <strong className="font-garetBold">compartilhe facilmente o
        link ou o QR Code</strong> com amigos e familiares. Se preferir, você pode privar
        a criação, tornando-a apenas visível para quem você escolher. Além
        disso, é possível adicionar um link para o YouTube, tornando a
        <strong className="font-garetBold"> experiência</strong> ainda mais completa e interativa.
      </p>
    </div>
  );
}
