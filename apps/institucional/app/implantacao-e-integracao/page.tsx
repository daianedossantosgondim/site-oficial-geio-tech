import Link from "next/link";
import { Acao, Envelope, Grade, Heroi, ListaTecnica, Pilha, Secao, SecaoCabecalho } from "@geio/ui";
import { marca } from "@geio/tokens";
import { metadadosDaRota } from "@/conteudo/metadados";

export const metadata = metadadosDaRota({
  titulo: "Implantação e Integração",
  descricao:
    "Execução do Plano de Compatibilização na operação real: instanciação dos Campos de Ordem e ativação dos Vetos Estruturais.",
  caminho: "/implantacao-e-integracao",
});

const ASSUNTO = encodeURIComponent("Solicitação - Implantação e Integração");

export default function Implantacao() {
  return (
    <>
      <Heroi>
        <Envelope>
          <Pilha>
            <p className="rotulo">Etapa 3 da sequência</p>
            <h1>Implantação e Integração</h1>
            <p className="subtitulo">
              A Varredura entrega o diagnóstico e o plano. A Implantação executa esse plano na
              operação real.
            </p>
          </Pilha>
        </Envelope>
      </Heroi>

      <Secao rotuladaPor="titulo-prerequisito">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="Pré-requisito"
            titulo="Só se aplica a operações com Plano de Compatibilização concluído"
            tituloId="titulo-prerequisito"
            subtitulo={
              <>
                Esta etapa não diagnostica de novo. Ela parte do plano assinado ao fim da{" "}
                <Link href="/varredura-in-company">Varredura Paramétrica In-Company</Link> e o
                instala na operação.
              </>
            }
          />
          <ListaTecnica
            itens={[
              { codigo: "01", descricao: <><strong>Instanciação dos Campos de Ordem</strong> — definição de quem decide o quê, e onde uma responsabilidade termina e outra começa.</> },
              { codigo: "02", descricao: <><strong>Ativação dos Vetos Estruturais</strong> — implementação dos impedimentos de design que tornam o erro identificado impossível de repetir.</> },
              { codigo: "03", descricao: <><strong>Estruturação de rotinas e indicadores</strong> — coleta contínua de dados para recálculo periódico de IIO e CCS.</> },
              { codigo: "04", descricao: <><strong>Capacitação interna</strong> — treinamento dos responsáveis do cliente na leitura dos indicadores, para eliminar dependência externa permanente.</> },
            ]}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-encerramento">
        <Envelope>
          <SecaoCabecalho rotulo="Entregáveis" titulo="Encerramento com prova comparativa" tituloId="titulo-encerramento" />
          <Grade>
            <div>
              <h3>Mapa de Campos de Ordem</h3>
              <p>Versão final das fronteiras de decisão entre setores.</p>
            </div>
            <div>
              <h3>Registro de Vetos Estruturais</h3>
              <p>O que foi bloqueado, como, e a partir de quando — com confirmação de que está ativo, não apenas documentado.</p>
            </div>
            <div>
              <h3>Painel comparativo</h3>
              <p>IIO e CCS recalculados após a implantação, comparados aos valores da Varredura original.</p>
            </div>
            <div>
              <h3>Relatório de Encerramento</h3>
              <p>Documento assinado pela Arquiteta-Chefe, com evidência antes e depois.</p>
            </div>
          </Grade>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-investimento">
        <Envelope>
          <Pilha>
            <SecaoCabecalho
              rotulo="Investimento"
              titulo="Sob consulta"
              tituloId="titulo-investimento"
              subtitulo="Definido a partir do número de ações do Plano de Compatibilização entregue na Varredura. O cliente conhece esse número antes de contratar."
            />
            <Acao
              href={`mailto:${marca.email}?subject=${ASSUNTO}`}
              expectativa="Abre seu cliente de e-mail com o assunto preenchido."
              valor="O enquadramento vem na resposta."
            >
              Solicitar por e-mail
            </Acao>
          </Pilha>
        </Envelope>
      </Secao>
    </>
  );
}
