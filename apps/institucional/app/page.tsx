import Link from "next/link";
import {
  Acao,
  DuasColunas,
  Envelope,
  Grade,
  Heroi,
  ListaTecnica,
  Pilha,
  Secao,
  SecaoCabecalho,
  Sequencia,
} from "@geio/ui";
import { CalculadoraGEIO } from "@geio/instrumentos";
import { marca, produto } from "@geio/tokens";
import { ESTEIRA } from "@/conteudo/navegacao";
import { metadadosDaRota } from "@/conteudo/metadados";

export const metadata = metadadosDaRota({
  titulo: "GEIO | Arquitetura Operacional para Indústrias",
  descricao:
    "Calcule o indicador preliminar de erosão operacional da sua indústria. GEIO estrutura decisões operacionais e as torna previsíveis.",
  caminho: "/",
});

/**
 * No institucional a calculadora é portão: a oferta só aparece depois
 * que a pessoa vê o próprio número. Na página do produto o mesmo
 * componente tem o preço sempre visível — comportamento parametrizado,
 * não código duplicado.
 */
function OfertaRevelada() {
  return (
    <section className="oferta" aria-labelledby="titulo-oferta">
      <div className="oferta-topo">
        <p className="rotulo">O que esse número não mostra</p>
        <h2 id="titulo-oferta">{produto.nome}</h2>
        <p className="subtitulo">
          O indicador acima mede a superfície da perda. Ele não aponta <em>onde</em> a arquitetura a
          produz. Essa é a função do {produto.nome} — leitura estruturada, entrega digital imediata,
          sem reunião prévia e sem agendamento.
        </p>
      </div>
      <Grade>
        {produto.artefatos.map((artefato, i) => (
          <div key={artefato}>
            <p className="rotulo">Artefato {String(i + 1).padStart(2, "0")}</p>
            <h3>{artefato}</h3>
          </div>
        ))}
      </Grade>
      <Pilha>
        <p className="rotulo">Investimento — {produto.precoTexto}, pagamento único</p>
        <Link className="acao" href="/diagnostico-preliminar-parametrico">
          Ver o {produto.nome}
        </Link>
      </Pilha>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Heroi>
        <Envelope>
          <Pilha>
            <p className="rotulo">GEIO — Gestão Estrutural da Incompatibilidade Organizacional</p>
            <h1>A desordem operacional não é falha humana. É falha de arquitetura.</h1>
            <p className="subtitulo">
              GEIO estrutura decisões operacionais e as torna previsíveis. Comece medindo o que a
              arquitetura atual da sua operação consome por ano.
            </p>
            <Acao
              href="#calculadora"
              espacoAcima
              expectativa="O cálculo aparece na própria página."
              valor="Nenhum dado sai da sua máquina."
            >
              Calcular o custo da minha operação
            </Acao>
            <p className="contato-linha">
              Contato institucional: <a href={`mailto:${marca.email}`}>{marca.email}</a>
            </p>
          </Pilha>
        </Envelope>
      </Heroi>

      <Secao id="calculadora" rotuladaPor="titulo-calculadora">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="Calculadora GEIO"
            titulo="Simulador Paramétrico de Impacto Estrutural"
            tituloId="titulo-calculadora"
            subtitulo="Três variáveis que você já conhece. O cálculo roda no seu navegador — nenhum dado é enviado, armazenado ou solicitado em troca do resultado."
          />
          <CalculadoraGEIO revelaAoCalcular={<OfertaRevelada />} />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-passivo">
        <Envelope>
          <SecaoCabecalho
            rotulo="O que está por trás do número"
            titulo="Toda arquitetura fragmentada sustenta um Passivo Invisível Industrial."
            tituloId="titulo-passivo"
          />
          <Grade>
            <div>
              <p className="rotulo">Vetor 01</p>
              <h3>Vazamento de Margem</h3>
              <p>
                Perda crônica via retrabalho, horas técnicas consumidas em consolidação manual e
                Shadow IT.
              </p>
            </div>
            <div>
              <p className="rotulo">Vetor 02</p>
              <h3>Risco Cognitivo e Ocupacional</h3>
              <p>
                Sobrecarga imposta às equipes pelo próprio desenho da operação. A gestão formal
                dos fatores de risco psicossocial é obrigatória desde maio de 2025, e desde 26 de
                maio de 2026 a fiscalização da NR-1 tem caráter punitivo.
              </p>
            </div>
            <div>
              <p className="rotulo">Vetor 03</p>
              <h3>Vulnerabilidade Informacional</h3>
              <p>Dados estratégicos circulando em canais não governados, sem rastreabilidade decisória.</p>
            </div>
          </Grade>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-definicao">
        <Envelope>
          <SecaoCabecalho
            rotulo="Definição"
            titulo="GEIO não é consultoria. É Arquitetura Operacional."
            tituloId="titulo-definicao"
          />
          <DuasColunas>
            <div>
              <p className="rotulo">GEIO é</p>
              <ul>
                <li>Arquitetura de processos</li>
                <li>Diagnóstico estrutural</li>
                <li>Governança operacional</li>
                <li>Redução de carga cognitiva</li>
                <li>Ordem inevitável</li>
              </ul>
            </div>
            <div>
              <p className="rotulo">GEIO não é</p>
              <ul>
                <li>Consultoria genérica</li>
                <li>Treinamento motivacional</li>
                <li>Implantação de software</li>
                <li>Gestão de pessoas</li>
                <li>Promessa de substituir o decisor</li>
              </ul>
            </div>
          </DuasColunas>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-sequencia">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="A Sequência"
            titulo="Cada etapa entrega o insumo da etapa seguinte."
            tituloId="titulo-sequencia"
            subtitulo="Nenhuma etapa é pulada. O diagnóstico precede o plano; o plano precede a execução."
          />
          <Sequencia etapas={ESTEIRA} />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-para-quem">
        <Envelope>
          <SecaoCabecalho
            rotulo="Para quem"
            titulo="Indústrias que já operam com ERP e ainda decidem por planilha."
            tituloId="titulo-para-quem"
          />
          <ListaTecnica
            itens={[
              { codigo: "Perfil 01", descricao: <><strong>Gerentes e Diretores de PCP</strong> — priorização de ordens, sequenciamento e reprogramação.</> },
              { codigo: "Perfil 02", descricao: <><strong>Gerentes de Operações</strong> — capacidade, gargalos e dependência de pessoas-chave.</> },
              { codigo: "Perfil 03", descricao: <><strong>COOs e Diretores Industriais</strong> — previsibilidade operacional e governança.</> },
              { codigo: "Perfil 04", descricao: <><strong>Supply Chain Managers</strong> — ruptura de materiais e compras emergenciais.</> },
            ]}
          />
        </Envelope>
      </Secao>

      <Secao>
        <Envelope>
          <Pilha>
            <h2>GEIO. Onde existe estrutura, o caos não se sustenta.</h2>
            <p className="contato-linha">
              Contato institucional: <a href={`mailto:${marca.email}`}>{marca.email}</a>
            </p>
          </Pilha>
        </Envelope>
      </Secao>
    </>
  );
}
