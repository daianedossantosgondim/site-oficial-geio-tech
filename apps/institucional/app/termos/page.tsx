import Link from "next/link";
import { ListaTecnica, Nota } from "@geio/ui";
import { marca, produto } from "@geio/tokens";
import { DocumentoLegal, type ItemLegal } from "@/conteudo/DocumentoLegal";
import { metadadosDaRota } from "@/conteudo/metadados";

export const metadata = metadadosDaRota({
  titulo: "Termos de Uso",
  descricao:
    "Termos de uso do site e dos produtos GEIO: licença, direito de arrependimento, limites do serviço e foro.",
  caminho: "/termos",
});

const MAIL = <a href={`mailto:${marca.email}`}>{marca.email}</a>;

const ITENS: ItemLegal[] = [
  {
    numero: "01",
    titulo: "Quem somos",
    corpo: (
      <>
        <p>
          Este site é operado por <strong>{marca.nome}</strong>, inscrita no CNPJ {marca.cnpj}, com
          sede em {marca.cidade}, Brasil. Contato institucional exclusivo: {MAIL}.
        </p>
        <p>
          GEIO é a sigla de Gestão Estrutural da Incompatibilidade Organizacional — um framework de
          arquitetura operacional de autoria de Daiane Gondim, que exerce a função de
          Arquiteta-Chefe e custodiante formal do framework.
        </p>
      </>
    ),
  },
  {
    numero: "02",
    titulo: "O que estes termos cobrem",
    corpo: (
      <p>
        Ao navegar neste site, usar a Calculadora GEIO ou adquirir qualquer produto ou serviço aqui
        apresentado, você concorda com as condições abaixo. Se não concordar, não utilize o site nem
        contrate os serviços.
      </p>
    ),
  },
  {
    numero: "03",
    titulo: "Produtos e serviços",
    corpo: (
      <>
        <ListaTecnica
          itens={[
            { codigo: "Etapa 1", descricao: <><strong>{produto.nome}</strong> — produto digital autoatendido, pagamento único de {produto.precoTexto}, com entrega digital imediata. Compreende três artefatos: {produto.artefatos.join(", ")}.</> },
            { codigo: "Etapa 2", descricao: <><strong>Varredura Paramétrica In-Company</strong> — serviço presencial, com escopo e investimento definidos em contrato específico, na fase de alinhamento de escopo.</> },
            { codigo: "Etapa 3", descricao: <><strong>Implantação e Integração</strong> — serviço de execução do Plano de Compatibilização, com escopo e investimento definidos em contrato específico.</> },
          ]}
        />
        <Nota>
          O pagamento do {produto.nome} é processado pela plataforma Kiwify, que atua como
          intermediadora. As condições de pagamento, emissão de comprovante e liberação do acesso
          seguem também os termos da própria plataforma. A GEIO não coleta nem armazena dados de
          cartão.
        </Nota>
      </>
    ),
  },
  {
    numero: "04",
    titulo: "Direito de arrependimento",
    corpo: (
      <p>
        Nos termos do <strong>artigo 49 do Código de Defesa do Consumidor</strong>, você pode
        desistir da compra em até <strong>7 (sete) dias corridos</strong> contados do recebimento do
        produto, por se tratar de contratação fora do estabelecimento comercial. O pedido deve ser
        enviado por e-mail para {MAIL}, e o valor pago é devolvido integralmente, pelo mesmo meio de
        pagamento.
      </p>
    ),
  },
  {
    numero: "05",
    titulo: "Licença de uso e propriedade intelectual",
    corpo: (
      <>
        <p>
          O framework GEIO, sua metodologia, seus indicadores (IIO e CCS), seus artefatos, textos,
          identidade visual e o código deste site são de propriedade da {marca.nome} e estão
          protegidos pela legislação brasileira de direito autoral.
        </p>
        <p>
          A aquisição de um produto concede <strong>licença de uso corporativa, intransferível e não
          exclusiva</strong>, limitada à operação do adquirente. É vedada a reprodução,
          redistribuição, revenda, sublicenciamento ou uso dos artefatos para prestação de serviços
          a terceiros sem autorização expressa e por escrito.
        </p>
        <p>
          As condições completas constam do Termo de Licença de Uso entregue junto com o produto. Em
          caso de divergência, prevalece o Termo de Licença.
        </p>
      </>
    ),
  },
  {
    numero: "06",
    titulo: "Natureza e limites do serviço",
    corpo: (
      <>
        <p>
          Os produtos GEIO são instrumentos de <strong>análise estrutural e apoio à decisão</strong>.
          Não substituem contexto, governança, validação humana nem evidência operacional, e não
          constituem consultoria jurídica, contábil, médica ou de investimentos.
        </p>
        <p>
          O resultado da <strong>Calculadora GEIO</strong> é um indicador paramétrico de referência,
          calculado a partir de valores informados por você. <strong>Não é valor contábil
          auditado</strong> e não deve ser usado como demonstração financeira.
        </p>
        <p>
          A GEIO não garante resultado econômico específico decorrente da aplicação do framework,
          uma vez que a execução das recomendações depende de decisões e de condições próprias de
          cada organização.
        </p>
      </>
    ),
  },
  {
    numero: "07",
    titulo: "Disponibilidade e alterações",
    corpo: (
      <p>
        O site pode ficar temporariamente indisponível por manutenção ou por causas alheias ao nosso
        controle. Estes termos podem ser alterados a qualquer momento; a data de última atualização
        no topo desta página indica a versão vigente. O uso continuado após a alteração significa
        concordância com a nova versão.
      </p>
    ),
  },
  {
    numero: "08",
    titulo: "Foro",
    corpo: (
      <>
        <p>
          Estes termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de
          Patos de Minas, Minas Gerais, para dirimir controvérsias, ressalvado o direito do
          consumidor de acionar o foro de seu domicílio, nos termos do Código de Defesa do
          Consumidor.
        </p>
        <p className="contato-linha">
          Dúvidas sobre estes termos: {MAIL} · <Link href="/transparencia">Centro de Transparência</Link>
        </p>
      </>
    ),
  },
];

export default function Termos() {
  return <DocumentoLegal titulo="Termos de Uso" atualizacao="13 de agosto de 2026" itens={ITENS} />;
}
