import Link from "next/link";
import { marca } from "@geio/tokens";

/** Um rodapé. Mesma história do cabeçalho: eram nove cópias. */
export function Rodape() {
  return (
    <footer className="rodape">
      <div className="envelope">
        <div className="rodape-grade">
          <div className="rodape-bloco">
            <p className="rotulo">Contato</p>
            <a href={`mailto:${marca.email}`}>{marca.email}</a>
            <span>Agendamento e dúvidas por e-mail.</span>
          </div>
          <div className="rodape-bloco">
            <p className="rotulo">Perfil</p>
            <a href={marca.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href={marca.lattes} target="_blank" rel="noopener">
              Currículo Lattes
            </a>
          </div>
          <div className="rodape-bloco">
            <p className="rotulo">Institucional</p>
            <span>CNPJ {marca.cnpj}</span>
            <span>{marca.cidade}</span>
            <Link href="/termos">Termos de Uso</Link>
            <Link href="/privacidade">Política de Privacidade</Link>
            <Link href="/transparencia">Centro de Transparência</Link>
          </div>
        </div>
        <div className="rodape-base">
          {/* O significado da sigla em toda página: é o dado que sustenta a
              entidade, tanto para quem lê quanto para quem indexa. */}
          <span>GEIO — {marca.siglaExtenso}</span>
          <span>© 2026 GEIO Gestão Inteligente</span>
        </div>
      </div>
    </footer>
  );
}
