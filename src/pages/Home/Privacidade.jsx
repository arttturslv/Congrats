import { motion } from "motion/react";
import Navbar from "../../components/Navbar";

export default function Privacidade() {
  return (
    <motion.div
      transition={{ ease: "easeInOut" }}
      animate={{ opacity: [0, 1] }}
      className="h-[100dvh] max-w-[1600px] flex flex-col place-self-center sm:px-12 px-4"
    >
      <Navbar></Navbar>

      <div className="space-y-6 pt-2 pb-12 text-sm">
        <div>
          <h1 className="font-zig text-lg">Política de Privacidade</h1>
          <p className="text-xs">Última atualização: 17 de dezembro de 2024</p>
        </div>
        <ul className="space-y-4">
          <li>
            <strong className="font-garetBold">1. Introdução</strong>
            <p>
              A privacidade e a proteção dos seus dados são fundamentais para
              nós. Esta Política de Privacidade tem como objetivo informar como
              coletamos, usamos, armazenamos e protegemos as informações
              pessoais que você nos fornece ao utilizar o nosso site. Ao acessar
              e utilizar nossos serviços, você concorda com as práticas
              descritas nesta política.
            </p>
          </li>

          <li>
            <strong className="font-garetBold">2. Informações Coletadas</strong>
            <p>
              Coletamos apenas as informações que você nos fornece diretamente.
              Isso inclui:
            </p>
            <ul>
              <li>
                <strong>Informações de Identificação:</strong> Nomes, datas, mensagens personalizadas, fotos
                enviadas.
              </li>
            </ul>
          </li>

          <li>
            <strong className="font-garetBold">3. Uso das Informações</strong>
            <p>Usamos suas informações para a seguinte finalidade:</p>
            <ul>
              <li>
                Criar e personalizar a página de felicitações com base nas
                informações fornecidas por você.
              </li>
            </ul>
          </li>

          <li>
            <strong className="font-garetBold">4. Compartilhamento de Dados</strong>
            <p>
              Não compartilhamos suas informações pessoais com terceiros.
            </p>
          </li>

          <li>
            <strong className="font-garetBold">5. Segurança das Informações</strong>
            <p>Embora tomemos medidas para proteger suas informações pessoais, recomendamos que você não envie informações sensíveis, como senhas, dados bancários ou qualquer outro dado confidencial, através de nossa plataforma, pois não utilizamos criptografia para proteger esses dados durante a transmissão.</p>
          </li>

          <li>
            <strong className="font-garetBold">6. Retenção de Dados</strong>
            <p>
              Nós retemos suas informações pessoais apenas pelo tempo necessário
              para as finalidades para as quais foram coletadas, ou conforme
              exigido pela legislação vigente. Após esse período, seus dados
              serão excluídos de nossos registros, salvo se houver a necessidade
              de retenção para cumprir obrigações legais.
            </p>
          </li>

          <li>
            <strong className="font-garetBold">7. Seus Direitos</strong>
            <p>
              Você tem o direito de excluir suas
              informações pessoais a qualquer momento. Para isso, basta entrar
              em contato conosco através do e-mail:{" "}
              <strong>arttturslv@gmail.com</strong>. Responderemos a sua
              solicitação dentro dos prazos legais.
            </p>
          </li>

          <li>
            <strong className="font-garetBold">8. Alterações nesta Política de Privacidade</strong>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para
              refletir mudanças nas nossas práticas ou por exigência de normas
              legais. Sempre que isso ocorrer, a data da última atualização será
              revista no topo deste documento. Recomendamos que você revise esta
              página regularmente para estar ciente de quaisquer modificações.
            </p>
          </li>

          <li>
            <strong className="font-garetBold">9. Contato</strong>
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
