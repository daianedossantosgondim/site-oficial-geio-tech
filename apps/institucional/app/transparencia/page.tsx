import Link from "next/link";
import {
  Envelope, Heroi, ListaTecnica, Nota, ParEscopo, Pilha, Secao, SecaoCabecalho, TabelaTecnica,
} from "@geio/ui";
import { marca } from "@geio/tokens";
import { metadadosDaRota } from "@/conteudo/metadados";

export const metadata = metadadosDaRota({
  titulo: "Centro de Transparência",
  descricao:
    "O que a GEIO trata, o que não trata, com que base legal e como exercer os direitos do titular previstos na LGPD.",
  caminho: "/transparencia",
});

const ASSUNTO = (direito: string) =>
  `mailto:${marca.email}?subject=${encodeURIComponent(`LGPD - ${direito}`)}`;

export default function Transparencia() {
  return (
    <>
      <Heroi>
        <Envelope>
          <Pilha>
            <p className="rotulo">Direitos do titular</p>
            <h1>Centro de Transparência</h1>
            <p className="subtitulo">
              O que é tratado, com que base legal, por quanto tempo, e como exercer cada direito
              previsto na Lei 13.709/2018.
            </p>
          </Pilha>
        </Envelope>
      </Heroi>

      <Secao rotuladaPor="titulo-honestidade">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="Antes de tudo"
            titulo="Hoje este site não coleta nada."
            tituloId="titulo-honestidade"
          />
          <p>
            Não há formulário, cadastro, newsletter, cookie de rastreamento ou script de terceiro. A
            Calculadora GEIO roda inteiramente no seu navegador. Se você apenas navegar aqui,{" "}
            <strong>não existe dado seu para ser acessado, corrigido ou eliminado</strong> — não
            porque estejamos escondendo, mas porque não foi coletado.
          </p>
          <p>
            Esta página existe por dois motivos: declarar isso de forma verificável, e já estar
            pronta no dia em que houver coleta. Programa de privacidade que só nasce quando o dado já
            está no banco nasce tarde.
          </p>
          <Nota>
            O tratamento existe quando você <em>nos escreve</em> ou <em>compra</em>. Os dois casos
            estão detalhados abaixo.
          </Nota>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-mapa">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="Mapa de tratamento"
            titulo="Finalidade, adequação e necessidade"
            tituloId="titulo-mapa"
            subtitulo="Cada linha declara por que o dado é pedido e o que acontece com ele. Nenhum dado é coletado para finalidade não declarada aqui."
          />
          <TabelaTecnica
            colunas={["Quando", "Dados", "Finalidade", "Base legal", "Retenção"]}
            linhas={[
              ["Você escreve por e-mail", "Nome, e-mail, conteúdo da mensagem", "Responder, orçar, agendar", "Art. 7º, V", "2 anos do último contato"],
              ["Você compra o Diagnóstico", "Nome, e-mail, CPF ou CNPJ", "Executar o contrato e entregar", "Art. 7º, V", "5 anos (CDC)"],
              ["Emissão fiscal", "Identificação e transação", "Obrigação legal", "Art. 7º, II", "Prazo tributário"],
              ["Você usa a calculadora", "Nenhum", "—", "Não se aplica", "Nada é retido"],
            ]}
          />
          <Nota>
            Dados de pagamento não passam pela GEIO: são tratados diretamente pela Kiwify, que atua
            como operadora. Não temos acesso a número de cartão. Ver{" "}
            <Link href="/privacidade">Política de Privacidade</Link>.
          </Nota>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-direitos">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="Art. 18 da LGPD"
            titulo="Como exercer cada direito"
            tituloId="titulo-direitos"
            subtitulo="Canal único, por e-mail, com registro formal da solicitação. Resposta em até 15 dias."
          />
          <ListaTecnica
            itens={[
              { codigo: "Confirmação", descricao: <>Saber se existe tratamento de dado seu. <a href={ASSUNTO("Confirmação de tratamento")}>Solicitar confirmação</a></> },
              { codigo: "Acesso", descricao: <>Receber cópia dos dados que temos. <a href={ASSUNTO("Acesso aos dados")}>Solicitar acesso</a></> },
              { codigo: "Correção", descricao: <>Corrigir dado incompleto, inexato ou desatualizado. <a href={ASSUNTO("Correção de dados")}>Solicitar correção</a></> },
              { codigo: "Eliminação", descricao: <>Eliminar dado desnecessário ou tratado em desconformidade — ressalvado o que a lei obriga a guardar. <a href={ASSUNTO("Eliminação de dados")}>Solicitar eliminação</a></> },
              { codigo: "Portabilidade", descricao: <>Receber seus dados em formato que permita transferi-los. <a href={ASSUNTO("Portabilidade")}>Solicitar portabilidade</a></> },
              { codigo: "Informação", descricao: <>Saber com quem compartilhamos e por quê. <a href={ASSUNTO("Compartilhamento")}>Solicitar informação</a></> },
              { codigo: "Revogação", descricao: <>Revogar consentimento, quando essa for a base legal aplicável. <a href={ASSUNTO("Revogação de consentimento")}>Revogar</a></> },
            ]}
          />
          <Nota>
            Para responder, precisamos confirmar que a solicitação parte do próprio titular. A
            confirmação é feita pelo mesmo e-mail que originou o tratamento — pedir documento adicional
            seria coletar mais dado do que o necessário para atender a um pedido de privacidade.
          </Nota>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-compromissos">
        <Envelope className="pilha-larga">
          <SecaoCabecalho rotulo="Compromissos" titulo="O que fazemos e o que não fazemos" tituloId="titulo-compromissos" />
          <ParEscopo
            esquerda={{
              rotulo: "Fazemos",
              itens: [
                "Coletar só o necessário para a finalidade declarada",
                "Responder solicitação de titular em até 15 dias",
                "Comunicar incidente com risco relevante a você e à ANPD",
                "Manter o cálculo da calculadora no seu navegador",
              ],
            }}
            direita={{
              rotulo: "Não fazemos",
              itens: [
                "Vender, alugar ou ceder dado pessoal",
                "Usar cookie de rastreamento ou publicidade",
                "Carregar script de terceiro nas páginas",
                "Tomar decisão automatizada sobre você",
              ],
            }}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-encarregada">
        <Envelope>
          <Pilha>
            <SecaoCabecalho rotulo="Encarregada" titulo="Quem responde" tituloId="titulo-encarregada" />
            <p>
              Daiane Gondim, Arquiteta-Chefe e encarregada pelo tratamento de dados.{" "}
              <a href={`mailto:${marca.email}`}>{marca.email}</a>
            </p>
            <Nota>
              Se a resposta não resolver, você pode reclamar à Autoridade Nacional de Proteção de
              Dados (ANPD).
            </Nota>
          </Pilha>
        </Envelope>
      </Secao>
    </>
  );
}
