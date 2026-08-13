import Link from "next/link";
import {
  Acao,
  Envelope,
  Heroi,
  ListaTecnica,
  Nota,
  ParEscopo,
  Pilha,
  Secao,
  SecaoCabecalho,
} from "@geio/ui";
import { marca, produto } from "@geio/tokens";
import { metadadosDaRota } from "@/conteudo/metadados";

/**
 * Página de retorno pós-compra, para colar no campo de redirecionamento
 * da Kiwify.
 *
 * `noindex`: é destino de checkout, não conteúdo público. Indexá-la
 * levaria gente ao "obrigado" sem ter comprado nada.
 */
export const metadata = {
  ...metadadosDaRota({
    titulo: "Compra confirmada",
    descricao:
      "Confirmação de compra do Diagnóstico Preliminar Paramétrico GEIO e o que acontece a seguir.",
    caminho: "/obrigado",
  }),
  robots: { index: false, follow: false },
};

const ASSUNTO = encodeURIComponent(`Dúvida sobre o ${produto.nome}`);

export default function Obrigado() {
  return (
    <>
      <Heroi>
        <Envelope>
          <Pilha>
            <p className="rotulo">Compra confirmada</p>
            <h1>Obrigada. Sua compra foi processada.</h1>
            <p className="subtitulo">
              Você adquiriu o {produto.nome} — {produto.precoTexto}, pagamento único. O acesso aos
              três artefatos é liberado pela Kiwify logo após a confirmação do pagamento.
            </p>
          </Pilha>
        </Envelope>
      </Heroi>

      <Secao rotuladaPor="titulo-recebe">
        <Envelope>
          <SecaoCabecalho
            rotulo="O que você recebe"
            titulo="Três artefatos — e nada além deles"
            tituloId="titulo-recebe"
            subtitulo="A lista abaixo é exaustiva. Se algo não está aqui, não faz parte deste produto."
          />
          <ListaTecnica
            itens={[
              {
                codigo: "01",
                descricao: (
                  <>
                    <strong>Laudo de Diagnóstico Estrutural</strong> — leitura preliminar de
                    referência, em PDF. Comece por ele.
                  </>
                ),
              },
              {
                codigo: "02",
                descricao: (
                  <>
                    <strong>Matriz Paramétrica de Rastreamento</strong> — planilha de
                    acompanhamento operacional. Fica com você e continua servindo depois.
                  </>
                ),
              },
              {
                codigo: "03",
                descricao: (
                  <>
                    <strong>Termo de Licença de Uso</strong> — as condições formais de utilização
                    dos artefatos.
                  </>
                ),
              },
            ]}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-acesso">
        <Envelope>
          <SecaoCabecalho rotulo="Acesso" titulo="Onde os arquivos estão" tituloId="titulo-acesso" />
          <ListaTecnica
            itens={[
              {
                codigo: "Passo 1",
                descricao:
                  "A Kiwify envia a confirmação para o e-mail cadastrado na sua conta dela — não necessariamente o mesmo que você usa no trabalho.",
              },
              {
                codigo: "Passo 2",
                descricao:
                  "Se não encontrar, procure na pasta de spam ou promoções, e confira qual e-mail está cadastrado na sua conta Kiwify.",
              },
              {
                codigo: "Passo 3",
                descricao: (
                  <>
                    Se ainda assim não chegar, escreva para{" "}
                    <a href={`mailto:${marca.email}?subject=${ASSUNTO}`}>{marca.email}</a> com o
                    e-mail usado na compra. Resolvemos direto.
                  </>
                ),
              },
            ]}
          />
          <Nota className="espaco-acima-largo">
            A entrega é feita pela plataforma, não por nós. A GEIO não coleta nem armazena dados de
            cartão — ver <Link href="/privacidade">Política de Privacidade</Link>.
          </Nota>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-limites">
        <Envelope>
          <SecaoCabecalho
            rotulo="Expectativa"
            titulo="O que este produto faz — e o que ele não faz"
            tituloId="titulo-limites"
            subtitulo="Dizer isso agora evita frustração depois."
          />
          <ParEscopo
            esquerda={{
              rotulo: "Está incluído",
              itens: [
                "Leitura estruturada preliminar da arquitetura operacional",
                "Instrumento de rastreamento para uso contínuo",
                "Prioridade de atendimento na fila da Varredura",
                "Canal direto com a Arquiteta-Chefe para dúvidas sobre o conteúdo",
              ],
            }}
            direita={{
              rotulo: "Não está incluído",
              itens: [
                "Cálculo do IIO e do CCS da sua operação — isso exige evidência de campo e é entregue na Varredura",
                "Visita, entrevista ou observação presencial",
                "Plano de Compatibilização com responsáveis e prazos",
                "Execução do redesenho — essa é a etapa 3",
              ],
            }}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-depois">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="Etapa seguinte"
            titulo="Sua operação entra com prioridade na fila"
            tituloId="titulo-depois"
            subtitulo="Não há obrigação nenhuma. O Diagnóstico existe para você decidir com leitura estrutural em mãos — inclusive decidir não seguir."
          />
          <Acao
            href="/varredura-in-company"
            expectativa="Escopo, entregáveis e faixas de investimento da etapa 2."
            valor="Sem compromisso de contratação."
          >
            Conhecer a Varredura Paramétrica In-Company
          </Acao>
          <Nota>
            Direito de arrependimento de 7 dias corridos, nos termos do artigo 49 do Código de
            Defesa do Consumidor. O pedido é feito por e-mail, com devolução integral. Ver{" "}
            <Link href="/termos">Termos de Uso</Link>.
          </Nota>
        </Envelope>
      </Secao>
    </>
  );
}
