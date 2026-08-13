import Link from "next/link";
import { Envelope, Heroi, Pilha } from "@geio/ui";

export default function NaoEncontrado() {
  return (
    <Heroi>
      <Envelope className="pilha">
        <Pilha>
          <p className="rotulo">Erro 404</p>
          <h1>Esta página não existe.</h1>
          <p className="subtitulo">
            O endereço pode ter mudado ou o link estar incompleto. A navegação acima leva a todas as
            rotas do site.
          </p>
          <p className="contato-linha">
            Se você chegou aqui por um link nosso, avise em{" "}
            <a href="mailto:daianegondim@unipam.edu.br">daianegondim@unipam.edu.br</a> — é falha de
            arquitetura, e a gente corrige.
          </p>
          <p className="contato-linha">
            <Link href="/">Voltar ao início</Link>
          </p>
        </Pilha>
      </Envelope>
    </Heroi>
  );
}
