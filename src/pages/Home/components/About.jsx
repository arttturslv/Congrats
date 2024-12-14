export default function About() {
  return (
    <div className="w-full flex justify-between ">
      <div className="space-y-4">
        <h1 className="text-2xl  font-zig">Como funciona?</h1>
        <div className="space-y-3">
          <p className="">
            Criar uma lembrança única é simples! Basta preencher alguns campos e
            adicionar detalhes personalizados:
          </p>
          <ul className="space-y-1">
          <p className="font-zig">Campos obrigatórios:</p>
            
            <li>Título: Dê um nome à sua criação.</li>
            <li>
              Nome do remetente e do destinatário: Informe quem está enviando e
              quem vai receber.
            </li>
            <li>
              Imagem e descrição: Adicione imagens e escreva uma descrição para
              cada uma delas.
            </li>
          </ul>
          <ul className="space-y-1">
            <p className="font-zig">Campos opcionais:</p>
            <li>
              <strong>Data em que conheceu a pessoa:</strong> Adicione a data para tornar a
              lembrança mais pessoal.
            </li>
            <li>Privacidade: Escolha se a criação será pública ou privada.</li>
            <li>
              Data da foto e título da foto: Se desejar, adicione a data e um
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
