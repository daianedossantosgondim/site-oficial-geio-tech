import Link from "next/link";
import {
  DuasColunas,
  Envelope,
  Formula,
  Grade,
  Heroi,
  ListaTecnica,
  Nota,
  Pilha,
  Secao,
  SecaoCabecalho,
  TabelaTecnica,
} from "@geio/ui";
import { produto } from "@geio/tokens";
import { metadadosDaRota } from "@/conteudo/metadados";

export const metadata = metadadosDaRota({
  titulo: "Metodologia",
  descricao:
    "GEIO — Gestão Estrutural da Incompatibilidade Organizacional: cinco camadas, sete Críticos Invariáveis e os indicadores IIO e CCS.",
  caminho: "/metodologia",
});

export default function Metodologia() {
  return (
    <>
      <Heroi>
        <Envelope>
          <Pilha>
            <p className="rotulo">Framework</p>
            <h1>GEIO é um framework, não uma consultoria.</h1>
            <p className="subtitulo">
              Estrutura de princípios, critérios, instrumentos e rotinas destinada a diagnosticar,
              reduzir e prevenir incompatibilidades entre processos, dados, decisões e sistemas.
            </p>
          </Pilha>
        </Envelope>
      </Heroi>

      <Secao rotuladaPor="titulo-principio">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="Princípio fundador"
            titulo="Não são os humanos que precisam se adaptar ao sistema. É o sistema que precisa se adaptar ao humano."
            tituloId="titulo-principio"
          />
          <Grade>
            <div>
              <h3>Arquitetura precede automação</h3>
              <p>Nenhuma tecnologia resolve o que a arquitetura não estruturou.</p>
            </div>
            <div>
              <h3>Compatibilidade é critério de design</h3>
              <p>Compatibilidade não é efeito colateral — é o objetivo.</p>
            </div>
            <div>
              <h3>Carga cognitiva é custo mensurável</h3>
              <p>Esforço mental desnecessário é desperdício organizacional.</p>
            </div>
            <div>
              <h3>Erro recorrente é falha de sistema</h3>
              <p>Problemas repetidos não são culpa humana — são falha de desenho.</p>
            </div>
          </Grade>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-camadas">
        <Envelope>
          <SecaoCabecalho rotulo="Arquitetura conceitual" titulo="As cinco camadas" tituloId="titulo-camadas" />
          <ListaTecnica
            itens={[
              { codigo: "Camada 1", descricao: <><strong>Filosófica</strong> — estabelece a visão de que o sistema deve se adaptar ao humano.</> },
              { codigo: "Camada 2", descricao: <><strong>Canônica</strong> — define termos, escopo, limites e proposições centrais do framework.</> },
              { codigo: "Camada 3", descricao: <><strong>Metodológica</strong> — determina como diagnosticar, classificar e tratar incompatibilidades.</> },
              { codigo: "Camada 4", descricao: <><strong>Instrumental</strong> — fornece indicadores, artefatos, ritos de exceção e formas de registro.</> },
              { codigo: "Camada 5", descricao: <><strong>Aplicada</strong> — conduz pilotos, intervenções e integração com ambientes reais.</> },
            ]}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-invariaveis">
        <Envelope>
          <SecaoCabecalho
            rotulo="Princípios não negociáveis"
            titulo="Os sete Críticos Invariáveis"
            tituloId="titulo-invariaveis"
            subtitulo="Condicionam a interpretação e a aplicação do framework. Não são recomendações."
          />
          <ListaTecnica
            itens={[
              { codigo: "I-01", descricao: "Primazia da compatibilidade estrutural" },
              { codigo: "I-02", descricao: "Arquitetura precede automação" },
              { codigo: "I-03", descricao: "Preservação da integridade semântica" },
              { codigo: "I-04", descricao: "Redução da carga cognitiva desnecessária" },
              { codigo: "I-05", descricao: "Rastreabilidade decisória e operacional" },
              { codigo: "I-06", descricao: "Validação humana em decisões críticas" },
              { codigo: "I-07", descricao: "Exceção recorrente não pode virar padrão" },
            ]}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-iio">
        <Envelope className="pilha-larga">
          <SecaoCabecalho rotulo="Indicador" titulo="IIO — Índice de Incompatibilidade Organizacional" tituloId="titulo-iio" />
          <TabelaTecnica
            colunas={["Dimensão", "Sigla", "Peso"]}
            linhas={[
              ["Processual", "P", "0,25"],
              ["Informacional", "I", "0,20"],
              ["Decisória", "D", "0,25"],
              ["Temporal", "T", "0,15"],
              ["Sistêmica", "S", "0,15"],
            ]}
          />
          <Formula>{"IIO = [(P × 0,25) + (I × 0,20) + (D × 0,25) + (T × 0,15) + (S × 0,15)] ÷ 4"}</Formula>
          <TabelaTecnica
            colunas={["Faixa", "Leitura institucional"]}
            linhas={[
              ["0,00 – 0,24", "Compatibilidade estrutural alta"],
              ["0,25 – 0,49", "Atenção com correção seletiva"],
              ["0,50 – 0,74", "Incompatibilidade relevante"],
              ["0,75 – 1,00", "Incompatibilidade crítica"],
            ]}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-ccs">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="Indicador"
            titulo="CCS — Carga Cognitiva Sistêmica"
            tituloId="titulo-ccs"
            subtitulo="Esforço mental adicional imposto pela própria estrutura organizacional para que o trabalho funcione."
          />
          <TabelaTecnica
            colunas={["Variável", "Sigla", "Peso"]}
            linhas={[
              ["Complexidade", "C", "0,30"],
              ["Exposição a Exceções", "E", "0,20"],
              ["Ambiguidade Informacional", "A", "0,30"],
              ["Retrabalho", "R", "0,20"],
            ]}
          />
          <Formula>{"CCS = [(C × 0,30) + (E × 0,20) + (A × 0,30) + (R × 0,20)] ÷ 5"}</Formula>
          <TabelaTecnica
            colunas={["Faixa", "Leitura institucional"]}
            linhas={[
              ["Até 0,20", "Carga muito baixa"],
              ["0,21 – 0,40", "Carga administrável"],
              ["0,41 – 0,60", "Carga relevante"],
              ["0,61 – 0,80", "Carga elevada"],
              ["0,81 – 1,00", "Carga crítica"],
            ]}
          />
          <Nota>
            A obrigatoriedade de gerenciamento formal dos fatores de risco psicossocial está em
            vigor desde maio de 2025. Desde 26 de maio de 2026, a fiscalização da NR-1 tem caráter
            punitivo, com possibilidade efetiva de autuação para organizações que não comprovem
            essa gestão. A NR-17, de ergonomia, alcança a sobrecarga gerada por retrabalho e
            processo mal desenhado. A CCS deixa de ser indicador interno e passa a ser variável de
            conformidade.
          </Nota>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-escopo">
        <Envelope className="pilha-larga">
          <SecaoCabecalho rotulo="Escopo e limites" titulo="O que o framework cobre — e o que não cobre" tituloId="titulo-escopo" />
          <DuasColunas>
            <div>
              <p className="rotulo">Escopo</p>
              <ul>
                <li>Diagnóstico e interpretação de incompatibilidades estruturais</li>
                <li>Compatibilização e governança</li>
                <li>Sistemas produtivos, PCP, Transformação Digital, Indústria 4.0</li>
              </ul>
            </div>
            <div>
              <p className="rotulo">Fora de escopo</p>
              <ul>
                <li>Avaliação psicológica individual</li>
                <li>Doutrina motivacional</li>
                <li>Consultoria genérica sem critério estrutural</li>
              </ul>
            </div>
          </DuasColunas>
          <Nota>
            Limite metodológico declarado: o GEIO não elimina a necessidade de contexto, governança,
            validação humana e evidência operacional. Base teórica de referência: Engenharia de
            Sistemas e Teoria das Restrições.
          </Nota>
          <p className="contato-linha">
            Ver como isso se aplica:{" "}
            <Link href="/diagnostico-preliminar-parametrico">{produto.nome}</Link>
          </p>
        </Envelope>
      </Secao>
    </>
  );
}
