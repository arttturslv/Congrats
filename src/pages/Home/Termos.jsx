import { motion } from "motion/react";
import Navbar from "../../components/Navbar";

export default function Termos() {
  return (
    <motion.div
      transition={{ ease: "easeInOut" }}
      animate={{ opacity: [0, 1] }}
      className="h-[100dvh] max-w-[1600px] flex flex-col place-self-center sm:px-12 px-4"
    >
      <Navbar></Navbar>

      <div className="space-y-6 pt-2 pb-12 text-sm">
        <div>
          <h1 className="font-zig text-lg">Termos de Uso </h1>
          <p className="text-xs">Última atualização: 17 de dezembro de 2024</p>
        </div>
        <ul className="space-y-4">
          <li>
            <strong className="font-garetBold">1. Aceitação dos Termos</strong>
            <p>
              Ao acessar e utilizar nossa plataforma, você concorda em cumprir
              com os presentes Termos de Uso. Caso não concorde com qualquer
              parte deste documento, pedimos que não utilize nosso site.
            </p>
          </li>

          <li>
            <strong className="font-garetBold">2. Descrição do Serviço </strong>
            <p>
              Nossa plataforma oferece uma maneira inovadora de criar lembranças
              personalizadas para celebrar momentos especiais, como
              aniversários, amizades, Natal e outras ocasiões marcantes. Você
              pode criar uma mensagem personalizada, adicionar fotos, descrições
              e detalhes sobre a sua relação com a pessoa para transformar esses
              momentos em memórias inesquecíveis. O processo é simples e envolve
              preencher alguns campos obrigatórios e opcionais, como título,
              nomes dos remetentes e destinatários, imagens e outras
              informações.
            </p>
            <ul>
              <li>
                <strong>Informações de Identificação:</strong> Nomes, datas,
                mensagens personalizadas, fotos enviadas.
              </li>
            </ul>
          </li>

          <li>
            <strong className="font-garetBold">3. Conteúdo do Usuário</strong>
            <p>
              Você é o único responsável pelo conteúdo que enviar para a
              plataforma, incluindo imagens, textos e qualquer outra informação
              inserida. Ao submeter conteúdo, você confirma que possui todos os
              direitos sobre ele e que não está violando direitos de terceiros,
              como direitos autorais ou privacidade. Não nos responsabilizamos
              por qualquer conteúdo impróprio, ilegal ou que viole os direitos
              de outros usuários.
            </p>
          </li>

          <li>
            <strong className="font-garetBold">
              4. Modificações no Serviço
            </strong>
            <p>
              Nosso compromisso é manter a plataforma acessível e operacional.
              Contudo, reservamo-nos o direito de modificar, interromper ou
              descontinuar o serviço a qualquer momento, por motivos técnicos,
              legais ou operacionais. Em tais situações, tomaremos as medidas
              necessárias para notificar os usuários com antecedência e tentar
              fornecer alternativas, se possível.
            </p>
          </li>

          <li>
            <strong className="font-garetBold">
              5. Limitação de Responsabilidade
            </strong>
            <p>
              Em nenhuma hipótese, seremos responsáveis por danos indiretos,
              incidentais, especiais ou consequentes relacionados ao uso ou
              impossibilidade de uso da plataforma, dentro dos limites
              permitidos pela legislação vigente.
            </p>
          </li>

          <li>
            <strong className="font-garetBold">6. Alterações nos Termos</strong>
            <p>
              Estes Termos de Uso podem ser alterados periodicamente. Quando
              isso ocorrer, a data da "última atualização" será revisada no topo
              desta página. Recomendamos que você revise regularmente os Termos
              de Uso para se manter informado sobre quaisquer alterações.
            </p>
          </li>

          <li>
            <strong className="font-garetBold">7. Contato</strong>
            <p>
              Se tiver dúvidas ou precisar de mais informações sobre nossa
              Política de Privacidade, entre em contato conosco pelo e-mail:{" "}
              <strong> arttturslv@gmail.com</strong>. Estamos à disposição para
              ajudar!
            </p>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
