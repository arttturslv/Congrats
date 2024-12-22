import Line from "../../../components/Line";
export default function About() {
  return (
    <div className="w-full flex justify-between ">
      <div className="text-base">
        <h1 className="text-xl  font-zig">Como funciona?</h1>
        <div className="space-y-3">
          <p className="">
            Criar uma lembrança única é simples! Basta preencher alguns campos e
            adicionar detalhes personalizados:
          </p>
          <div>
            <p className="font-zig  text-1xl">Campos obrigatórios:</p>

            <ul className="pl-3">
              <li>
                <strong className="font-garetBold">Título:</strong> Dê um nome à
                sua criação.
              </li>
              <li>
                <strong className="font-garetBold">Nomes:</strong> Informe quem
                está enviando e quem vai receber.
              </li>
              <li>
                <strong className="font-garetBold">Imagens</strong> Adicione
                imagens e escreva uma descrição para cada uma delas.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-zig text-1xl">Campos opcionais:</p>

            <ul className="pl-3">
              <li>
                <strong className="font-garetBold">Data:</strong> Adicione a
                data para tornar a lembrança mais pessoal.
              </li>
              <li>
                <strong className="font-garetBold">Privacidade:</strong> Escolha
                se a criação será pública ou privada.
              </li>
              <li>
                <strong className="font-garetBold">Detalhes da foto:</strong> Se
                desejar, adicione a data e um título para cada imagem.
              </li>
            </ul>
          </div>
        </div>
        <Line></Line>
      </div>
    </div>
  );
}
