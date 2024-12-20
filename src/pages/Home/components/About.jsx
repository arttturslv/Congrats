export default function About() {
  return (
    <div className="w-full flex justify-between ">
      <div className="space-y-4">
        <h1 className="text-2xl  font-zig">Como funciona?</h1>
        <div className="space-y-3">
          <p className=" text-sm">
            Criar uma lembrança única é simples! Basta preencher alguns campos e
            adicionar detalhes personalizados:
          </p>
          <ul className="space-y-1 text-sm">
          <p className="font-zig  text-base">Campos obrigatórios:</p>
            
            <li><strong className="font-garetBold">Título:</strong> Dê um nome à sua criação.</li>
            <li>
            <strong className="font-garetBold">Nome do remetente e do destinatário:</strong> Informe quem está enviando e
              quem vai receber.
            </li>
            <li>
            <strong className="font-garetBold">Imagem e descrição:</strong> Adicione imagens e escreva uma descrição para
              cada uma delas.
            </li>
          </ul>
          <ul className="space-y-1 text-sm">
            <p className="font-zig text-base">Campos opcionais:</p>
            <li>
              <strong className="font-garetBold">Data em que conheceu a pessoa:</strong> Adicione a data para tornar a
              lembrança mais pessoal.
            </li>
            <li><strong className="font-garetBold">Privacidade:</strong> Escolha se a criação será pública ou privada.</li>
            <li>
            <strong className="font-garetBold">Data da foto e título da foto:</strong> Se desejar, adicione a data e um
              título para cada imagem.
            </li>
          </ul>
          <p>
            Com esses detalhes, você cria uma lembrança personalizada e
            inesquecível para qualquer ocasião!
          </p>
        </div>
      </div>
    </div>
  );
}
