import Link from "next/link";
import {
  Acao,
  Envelope,
  FAQ,
  faqParaJsonLd,
  Heroi,
  ListaTecnica,
  Nota,
  ParEscopo,
  Pilha,
  Secao,
  SecaoCabecalho,
  Sequencia,
  TabelaTecnica,
} from "@geio/ui";
import { CalculadoraGEIO } from "@geio/instrumentos";
import { marca, produto } from "@geio/tokens";
import { ESTEIRA } from "@/conteudo/navegacao";
import { PERGUNTAS_PRODUTO } from "@/conteudo/perguntas";
import { metadadosDaRota } from "@/conteudo/metadados";

const DESCRICAO = `${produto.nome}: laudo estrutural, matriz paramétrica de rastreamento e licença de uso. Autoatendido, ${produto.precoTexto}, entrega digital imediata.`;

export const metadata = metadadosDaRota({
  titulo: produto.nome,
  descricao: DESCRICAO,
  caminho: "/diagnostico-preliminar-parametrico",
  imagem: "/og-diagnostico.png",
});

function DadosEstruturados() {
  const dados = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: produto.nome,
        description:
          "Leitura estruturada preliminar da arquitetura operacional, entregue em três artefatos digitais.",
        brand: { "@type": "Brand", name: marca.nome },
        url: `${marca.site}/diagnostico-preliminar-parametrico`,
        image: `${marca.site}/og-diagnostico.png`,
        offers: {
          "@type": "Offer",
          price: produto.preco.toFixed(2),
          priceCurrency: produto.moeda,
          availability: "https://schema.org/InStock",
          url: produto.checkout,
          seller: { "@type": "Organization", name: marca.nome, email: marca.email },
        },
      },
      faqParaJsonLd(PERGUNTAS_PRODUTO),
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />
  );
}

export default function PaginaProduto() {
  return (
    <>
      <DadosEstruturados />

      <Heroi>
        <Envelope>
          <Pilha>
            <p className="rotulo">Etapa 1 da sequência</p>
            <h1>{produto.nome}</h1>
            <p className="subtitulo">
              Leitura estruturada da arquitetura da sua operação — o que a desordem custa, e onde ela
              é produzida. Entrega digital imediata, sem agendamento e sem reunião prévia.
            </p>
            <Acao
              href={produto.checkout}
              externo
              espacoAcima
              expectativa="Você vai para o checkout da Kiwify."
              valor="Pagamento único · três artefatos · 7 dias para desistir."
            >
              Adquirir por {produto.precoTexto}
            </Acao>
          </Pilha>
        </Envelope>
      </Heroi>

      <Secao rotuladaPor="titulo-sintoma">
        <Envelope>
          <SecaoCabecalho
            rotulo="Diagnóstico diferencial"
            titulo="O mesmo sintoma, lido como estrutura"
            tituloId="titulo-sintoma"
            subtitulo="A coluna da esquerda é o que a operação relata. A da direita é o que o framework identifica por trás."
          />
          <TabelaTecnica
            colunas={["Sintoma visível", "Leitura GEIO"]}
            linhas={[
              ["Gargalos", "Desalinhamento lógico entre planejamento, informação e execução"],
              ["Reprogramações", "Decisão reativa, não previsível"],
              ["Dependência de planilhas", "O ERP registra, não estrutura decisão"],
              ["Retrabalho", "Incompatibilidade entre processo, critério e capacidade cognitiva"],
              ["Dependência de pessoas-chave", "Operação compensando falhas de arquitetura"],
            ]}
          />
        </Envelope>
      </Secao>

      <Secao id="calculadora" rotuladaPor="titulo-calculadora">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="Calculadora GEIO"
            titulo="Meça o seu caso antes de decidir"
            tituloId="titulo-calculadora"
            subtitulo="Três variáveis que você já conhece. O cálculo roda no seu navegador — nenhum dado é enviado, armazenado ou solicitado em troca do resultado."
          />
          <CalculadoraGEIO />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-limite">
        <Envelope className="pilha-larga">
          <SecaoCabecalho rotulo="O limite do indicador" titulo="O número diz quanto. Não diz onde." tituloId="titulo-limite" />
          <p>
            A erosão calculada acima mede a <strong>superfície</strong> da perda: horas técnicas
            consumidas por trabalho que a arquitetura obriga a existir. É um bom número para levar a
            uma reunião de diretoria — e é um número inútil para agir, porque não aponta qual
            decisão, qual interface entre setores ou qual critério ausente está produzindo aquilo.
          </p>
          <p>
            Essa é exatamente a função do {produto.nome}: transformar o quanto em <strong>onde</strong>.
          </p>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-artefatos">
        <Envelope>
          <SecaoCabecalho rotulo="O que você recebe" titulo="Três artefatos" tituloId="titulo-artefatos" />
          <ListaTecnica
            itens={[
              { codigo: "01", descricao: <><strong>Laudo de Diagnóstico Estrutural</strong> — as incompatibilidades da sua operação lidas pela lente do framework, com prioridades críticas de intervenção. Não é lista de sintomas.</> },
              { codigo: "02", descricao: <><strong>Matriz Paramétrica de Rastreamento</strong> — planilha de acompanhamento operacional, para uso contínuo depois da entrega. Fica com você e continua servindo.</> },
              { codigo: "03", descricao: <><strong>Termo de Licença de Uso</strong> — licença corporativa intransferível, com as condições formais de utilização dos artefatos.</> },
            ]}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-depois">
        <Envelope>
          <SecaoCabecalho rotulo="Depois do pagamento" titulo="O que acontece, na ordem" tituloId="titulo-depois" />
          <ListaTecnica
            itens={[
              { codigo: "Passo 1", descricao: <>Pagamento único de {produto.precoTexto} pela plataforma Kiwify, que intermedeia a transação. A GEIO não coleta nem armazena dados de cartão.</> },
              { codigo: "Passo 2", descricao: "Acesso aos três artefatos liberado imediatamente pela própria plataforma. Sem fila, sem agendamento, sem reunião de apresentação." },
              { codigo: "Passo 3", descricao: <>Dúvidas sobre o conteúdo entregue vão direto para a Arquiteta-Chefe, por e-mail: <a href={`mailto:${marca.email}`}>{marca.email}</a>. Canal único, com registro formal da solicitação.</> },
              { codigo: "Passo 4", descricao: <>Sua operação passa a ter prioridade de atendimento na fila da <Link href="/varredura-in-company">Varredura Paramétrica In-Company</Link> — a etapa seguinte, se e quando fizer sentido.</> },
            ]}
          />
          <Nota className="espaco-acima-largo">
            Direito de arrependimento de 7 dias corridos, nos termos do artigo 49 do Código de Defesa
            do Consumidor. Ver <Link href="/termos">Termos de Uso</Link>.
          </Nota>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-enquadramento">
        <Envelope>
          <SecaoCabecalho rotulo="Enquadramento" titulo="Para quem isto foi construído" tituloId="titulo-enquadramento" />
          <ParEscopo
            esquerda={{
              rotulo: "Faz sentido se",
              itens: [
                "Sua equipe trabalha muito e o resultado não acompanha o esforço",
                "Você tem ERP e ainda decide por planilha paralela",
                "Se uma pessoa-chave sai, parte da operação para",
                "As reuniões de alinhamento são frequentes e os problemas se repetem",
                "Você precisa de linguagem estrutural para levar ao board",
              ],
            }}
            direita={{
              rotulo: "Não faz sentido se",
              itens: [
                "Você procura treinamento motivacional ou gestão de pessoas",
                "Você espera que alguém decida no seu lugar",
                "Você quer implantação de software",
                "Você precisa de execução do redesenho agora — isso é a etapa 3, não esta",
              ],
            }}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-sequencia">
        <Envelope className="pilha-larga">
          <SecaoCabecalho
            rotulo="A sequência"
            titulo="Esta é a etapa 1 de 3"
            tituloId="titulo-sequencia"
            subtitulo="Cada etapa entrega o insumo da seguinte. Nenhuma é pulada: o diagnóstico precede o plano, o plano precede a execução."
          />
          <Sequencia etapas={ESTEIRA} atual="Diagnóstico" />
          <Nota>
            Adquirir o Diagnóstico não obriga a nada depois. Ele existe para você decidir com leitura
            estrutural em mãos — inclusive decidir não seguir.
          </Nota>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-investimento">
        <Envelope>
          <Pilha>
            <SecaoCabecalho
              rotulo="Investimento"
              titulo={`${produto.precoTexto} — pagamento único`}
              tituloId="titulo-investimento"
              subtitulo="Entrega digital imediata. Sem mensalidade, sem renovação automática, sem cobrança recorrente."
            />
            <Acao
              href={produto.checkout}
              externo
              expectativa="Você vai para o checkout da Kiwify. O acesso é liberado logo após a confirmação do pagamento —"
              valor="e você tem 7 dias para desistir, com devolução integral."
            >
              Adquirir e receber os três artefatos
            </Acao>
            <Nota className="espaco-acima-largo">
              Ainda não mediu a própria operação? <a href="#calculadora">Use a Calculadora GEIO</a>{" "}
              antes de decidir.
            </Nota>
          </Pilha>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-faq">
        <Envelope>
          <SecaoCabecalho rotulo="Antes de comprar" titulo="O que costuma ser perguntado" tituloId="titulo-faq" />
          <FAQ perguntas={PERGUNTAS_PRODUTO} />
        </Envelope>
      </Secao>
    </>
  );
}
