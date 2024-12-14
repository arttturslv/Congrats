import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Countdown from "../../components/Countdown";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { getCardQuantity } from "../../hooks/useAPI";
import Line from "../../components/Line";
export default function Home() {
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
    <motion.div
      transition={{ ease: "easeInOut" }}
      animate={{ opacity: [0, 1] }}
      className="h-[100dvh] max-w-[1600px] flex flex-col place-self-center sm:px-12 px-6"
    >
      <Navbar></Navbar>

      <div className="space-y-12 pt-12 pb-2">
        <div className="w-full sm:flex justify-between ">
          <div className="sm:w-[55%] space-y-4">
            <h1 className="text-3xl  font-zig">Um novo jeito de comemorar</h1>
            <p className="text-sm">
              Transforme momentos especiais em lembranças únicas!
            </p>
            <p className="text-sm">
              Mais de {quantityOfUsers} pessoas já usaram nosso site para
              celebrar ocasiões como aniversários, amizades, Natal e outros
              momentos marcantes. Adicione fotos, mensagens e detalhes
              personalizados para tornar cada fase ainda mais inesquecível.
            </p>
            <button
              className="w-92 flex  font-zig justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
              id="continuar"
              onClick={(e) => sendForm(e)}
            >
              <>Criar minha mensagem</>
            </button>
          </div>
          <div className="sm:w-[40%]">
            <img
              className="size-72"
              src="https://i.imgur.com/s3IrqQW.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-full flex justify-between ">
          <div className="space-y-4">
            <h1 className="text-2xl  font-zig">Como funciona?</h1>
            <div className="space-y-2">
              <p className="">
                Criar uma lembrança única é simples! Basta preencher alguns
                campos e adicionar detalhes personalizados:
              </p>
              <ul className="space-y-1">
                Campos obrigatórios:
                <li>Título: Dê um nome à sua criação.</li>
                <li>
                  Nome do remetente e do destinatário: Informe quem está
                  enviando e quem vai receber.
                </li>
                <li>
                  Imagem e descrição: Adicione imagens e escreva uma descrição
                  para cada uma delas.
                </li>
              </ul>
              <ul className="space-y-1">
                Campos opcionais:
                <li>
                  Data em que conheceu a pessoa: Adicione a data para tornar a
                  lembrança mais pessoal.
                </li>
                <li>
                  Privacidade: Escolha se a criação será pública ou privada.
                </li>
                <li>
                  Data da foto e título da foto: Se desejar, adicione a data e
                  um título para cada imagem.
                </li>
              </ul>
              <p>
                Com esses detalhes, você cria uma lembrança personalizada e
                inesquecível para qualquer ocasião!
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Line></Line>

          <div className=" sm:flex justify-center gap-8 max-sm:space-y-2">
            <div className="sm:w-[33%]">
              <Link
                id="page-header"
                to={"/"}
                className="flex items-center gap-1  hover:text-redHighlight transition-colors duration-300"
              >
                <img
                  className="size-8"
                  src="../src/assets/images/gift-box.png"
                  alt="gift box icon"
                />
                <h1 className="text-base  font-zig">Congrats</h1>
              </Link>
              <p className="text-xs">
                Transforme momentos especiais em lembranças únicas e
                inesquecíveis!
              </p>
            </div>
            <div className="sm:w-[33%] max-sm:flex-col max-sm:flex  max-sm:items-center">
              <h1 className="text-base font-zig">REDES</h1>
              <p className="text-xs">
                <a href="">linkedin/arttturslv</a>
              </p>
              <p className="text-xs">
                <a href="">github/arttturslv</a>
              </p>
            </div>
            <div className="sm:w-[33%] max-sm:flex-col max-sm:flex  max-sm:items-center">
              <h1 className="text-base  font-zig">Projetos</h1>
              <p className="text-xs">
                <a href="">Meu site</a>
              </p>
              <p className="text-xs">
                <a href="">Painel de post-its</a>
              </p>
              <p className="text-xs">
                <a href="">Encurtador de URL</a>
              </p>
            </div>
          </div>
          <div className="gap-1 text-xs text-center">
            <p className="font-garet">
              Copyright © 2024 - Todos os direitos reservados |{" "}
              <a className="hover:text-redHighlight"> Termos de uso </a> |{" "}
              <a className="hover:text-redHighlight">Termos de privacidade</a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
