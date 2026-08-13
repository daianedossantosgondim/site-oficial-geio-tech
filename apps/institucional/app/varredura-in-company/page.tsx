import Link from "next/link";
import {
  Acao, Envelope, Grade, Heroi, ListaTecnica, Nota, Pilha, Secao, SecaoCabecalho, TabelaTecnica,
} from "@geio/ui";
import { marca, produto } from "@geio/tokens";
import { metadadosDaRota } from "@/conteudo/metadados";

export const metadata = metadadosDaRota({
  titulo: "Varredura Paramétrica In-Company",
  descricao:
    "Investigação in-company que cobre a operação inteira: diagnóstico com IIO e CCS reais, evidência de conformidade NR-1 e Plano de Compatibilização.",
  caminho: "/varredura-in-company",
});

const ASSUNTO = encodeURIComponent("Solicitação - Varredura Paramétrica In-Company");

export default function Varredura() {
  return (
    <>
      <Heroi>
        <Envelope>
          <Pilha>
            <p className="rotulo">Etapa 2 da sequência</p>
            <h1>Varredura Paramétrica In-Company</h1>
            <p className="subtitulo">
              Investigação presencial de causas-raiz, interfaces organizacionais, restrições
              estruturais e governança. Cobre a empresa inteira — não um recorte de setor.
            </p>
          </Pilha>
        </Envelope>
      </Heroi>

      <Secao rotuladaPor="titulo-fases">
        <Envelope>
          <SecaoCabecalho rotulo="Como funciona" titulo="Cinco fases, com validação final da Arquiteta-Chefe" tituloId="titulo-fases" />
          <ListaTecnica
            itens={[
              { codigo: "Fase 1", descricao: <><strong>Alinhamento de escopo</strong> — mapeamento dos setores e macroprocessos cobertos, com enquadramento formal.</> },
              { codigo: "Fase 2", descricao: <><strong>Coleta de evidências</strong> — entrevistas técnicas por setor, observação de fluxo e mapeamento das interfaces entre áreas.</> },
              { codigo: "Fase 3", descricao: <><strong>Diagnóstico</strong> — cálculo do IIO e da CCS por setor e consolidado, com aplicação dos Críticos Invariáveis.</> },
              { codigo: "Fase 4", descricao: <><strong>Compatibilização</strong> — definição dos Vetos Estruturais e redesenho dos Campos de Ordem.</> },
              { codigo: "Fase 5", descricao: <><strong>Revisão estrutural</strong> — validação técnica e assinatura dos entregáveis pela Arquiteta-Chefe.</> },
            ]}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-entregaveis">
        <Envelope>
          <SecaoCabecalho rotulo="Entregáveis" titulo="Três documentos assinados" tituloId="titulo-entregaveis" />
          <Grade>
            <div>
              <h3>Diagnóstico proprietário</h3>
              <p>IIO e CCS calculados sobre dados reais da sua operação, com abertura por setor.</p>
            </div>
            <div>
              <h3>Evidência de conformidade NR-1</h3>
              <p>Documentação da carga cognitiva sistêmica como registro formal de gestão de risco psicossocial.</p>
            </div>
            <div>
              <h3>Plano de Compatibilização</h3>
              <p>Ações priorizadas, responsáveis, prazos e forma de verificação de eficácia.</p>
            </div>
          </Grade>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-investimento">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="Investimento"
            titulo="Escalonado por porte da operação"
            tituloId="titulo-investimento"
            subtitulo="O enquadramento é definido pelo número de setores e macroprocessos cobertos, na fase de alinhamento de escopo."
          />
          <TabelaTecnica
            colunas={["Escopo", "Cobertura", "Investimento"]}
            linhas={[
              ["Reduzido", "Até 3 setores", "R$ 12.000"],
              ["Intermediário", "4 a 6 setores", "R$ 18.000"],
              ["Amplo", "7+ setores ou múltiplas plantas", "Sob consulta"],
            ]}
          />
          <Nota>
            Clientes do <Link href="/diagnostico-preliminar-parametrico">{produto.nome}</Link> têm
            prioridade de atendimento na fila.
          </Nota>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-solicitacao">
        <Envelope>
          <Pilha>
            <SecaoCabecalho
              rotulo="Solicitação"
              titulo="Agendamento por e-mail"
              tituloId="titulo-solicitacao"
              subtitulo="Informe o número de setores e o segmento da operação. O enquadramento de escopo e o cronograma são definidos na resposta."
            />
            <Acao href={`mailto:${marca.email}?subject=${ASSUNTO}`}>Solicitar por e-mail</Acao>
            <Nota className="espaco-acima-largo">
              Empresas que concluem a Varredura têm acesso à{" "}
              <Link href="/implantacao-e-integracao">Implantação e Integração</Link>, que executa o
              Plano de Compatibilização na operação real.
            </Nota>
          </Pilha>
        </Envelope>
      </Secao>
    </>
  );
}
