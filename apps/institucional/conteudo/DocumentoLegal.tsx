import type { ReactNode } from "react";
import { Envelope, Heroi, Pilha, Secao, SecaoCabecalho } from "@geio/ui";

export type ItemLegal = { numero: string; titulo: string; corpo: ReactNode };

/**
 * Estrutura comum dos documentos legais. Numeração sequencial não é
 * decoração: em documento jurídico ela é endereço — permite citar
 * "§04" numa solicitação e as duas partes falarem da mesma cláusula.
 */
export function DocumentoLegal({
  titulo,
  atualizacao,
  itens,
}: {
  titulo: string;
  atualizacao: string;
  itens: ItemLegal[];
}) {
  return (
    <>
      <Heroi>
        <Envelope>
          <Pilha>
            <p className="rotulo">Documento legal</p>
            <h1>{titulo}</h1>
            <p className="subtitulo">Última atualização: {atualizacao}.</p>
          </Pilha>
        </Envelope>
      </Heroi>
      {itens.map((item) => (
        <Secao key={item.numero} rotuladaPor={`legal-${item.numero}`}>
          <Envelope className="pilha-larga">
            <SecaoCabecalho rotulo={item.numero} titulo={item.titulo} tituloId={`legal-${item.numero}`} />
            {item.corpo}
          </Envelope>
        </Secao>
      ))}
    </>
  );
}
