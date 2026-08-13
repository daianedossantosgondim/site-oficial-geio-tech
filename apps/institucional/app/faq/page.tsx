import { Envelope, FAQ, faqParaJsonLd, Heroi, Pilha, Secao, SecaoCabecalho } from "@geio/ui";
import { marca } from "@geio/tokens";
import { PERGUNTAS_FRAMEWORK, PERGUNTAS_PRODUTO } from "@/conteudo/perguntas";
import { metadadosDaRota } from "@/conteudo/metadados";

export const metadata = metadadosDaRota({
  titulo: "FAQ",
  descricao:
    "Perguntas frequentes sobre o framework GEIO, o Diagnóstico Preliminar Paramétrico GEIO e a Varredura Paramétrica In-Company.",
  caminho: "/faq",
});

const TODAS = [...PERGUNTAS_FRAMEWORK, ...PERGUNTAS_PRODUTO];

export default function PaginaFAQ() {
  const dados = { "@context": "https://schema.org", ...faqParaJsonLd(TODAS) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />
      <Heroi>
        <Envelope>
          <Pilha>
            <p className="rotulo">Perguntas frequentes</p>
            <h1>O que costuma ser perguntado antes da contratação.</h1>
            <p className="subtitulo">
              Dúvidas não respondidas aqui: <a href={`mailto:${marca.email}`}>{marca.email}</a>
            </p>
          </Pilha>
        </Envelope>
      </Heroi>

      <Secao rotuladaPor="titulo-framework">
        <Envelope>
          <SecaoCabecalho rotulo="Framework" titulo="Sobre o método" tituloId="titulo-framework" />
          <FAQ perguntas={PERGUNTAS_FRAMEWORK} />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-produto">
        <Envelope>
          <SecaoCabecalho rotulo="Produto" titulo="Sobre a compra e a entrega" tituloId="titulo-produto" />
          <FAQ perguntas={PERGUNTAS_PRODUTO} />
        </Envelope>
      </Secao>
    </>
  );
}
