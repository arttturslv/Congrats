import Line from "../../../components/Line";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="space-y-4">
      <Line></Line>

      <div className=" sm:flex justify-between gap-8 max-sm:space-y-2">
        <div className="sm:max-w-[20%]  max-sm:flex-col max-sm:flex  max-sm:items-center">
          <Link
            id="page-header"
            to={"/"}
            className="flex items-center gap-1  hover:text-redHighlight transition-colors duration-300"
          >
            <h1 className="text-base  font-zig">Congrats</h1>
          </Link>
          <p className="text-xs max-sm:text-center">
            Transforme momentos especiais em lembranças únicas e inesquecíveis!
          </p>
        </div>
        <div className="sm:max-w-[33%] max-sm:flex-col max-sm:flex  max-sm:items-center">
          <h1 className="text-base font-zig">REDES</h1>
          <p className="text-xs">
            <a
              className="hover:text-redHighlight transition-colors duration-100"
              href="https://www.linkedin.com/in/arttturslv/"
              target="_blank"
            >
              in/arttturslv
            </a>
          </p>
          <p className="text-xs">
            <a
              className="hover:text-redHighlight transition-colors duration-100"
              href="https://github.com/arttturslv"
              target="_blank"
            >
              github/arttturslv
            </a>
          </p>
        </div>
        <div className="sm:max-w-[33%] max-sm:flex-col max-sm:flex  max-sm:items-center">
          <h1 className="text-base  font-zig">Projetos</h1>
          <p className="text-xs">
            <a
              className="hover:text-redHighlight transition-colors duration-100"
              href="https://artttur.com/"
              target="_blank"
            >
              Meu site
            </a>
          </p>
          <p className="text-xs">
          <a
              className="hover:text-redHighlight transition-colors duration-100"
              href="https://postaai.artttur.com/"
              target="_blank"
            >
              Painel de post-its
            </a>
          </p>
          <p className="text-xs">
          <a
              className="hover:text-redHighlight transition-colors duration-100"
              href="https://s.artttur.com/"
              target="_blank"
            >
              Encurtador de URL
            </a>
          </p>
        </div>
      </div>
      <div className="gap-1 text-xs text-center">
        <p className="font-garet">
          Copyright © 2024 - Todos os direitos reservados |{" "}
          <a
              className="hover:text-redHighlight transition-colors duration-100"
              href="termos-de-uso"
            >
              Termos de uso
            </a> |{" "}
            <a
              className="hover:text-redHighlight transition-colors duration-100"
              href="/politica-privacidade"
            >
              Termos de privacidade
            </a>
        </p>
      </div>
    </div>
  );
}
