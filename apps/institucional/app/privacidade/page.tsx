import Link from "next/link";
import { ListaTecnica, Nota, TabelaTecnica } from "@geio/ui";
import { marca } from "@geio/tokens";
import { DocumentoLegal, type ItemLegal } from "@/conteudo/DocumentoLegal";
import { metadadosDaRota } from "@/conteudo/metadados";

export const metadata = metadadosDaRota({
  titulo: "Política de Privacidade",
  descricao:
    "Política de privacidade da GEIO: site sem cookies, calculadora que roda no navegador, dados tratados e direitos LGPD.",
  caminho: "/privacidade",
});

const MAIL = <a href={`mailto:${marca.email}`}>{marca.email}</a>;

const ITENS: ItemLegal[] = [
  {
    numero: "01",
    titulo: "Controlador dos dados",
    corpo: (
      <p>
        <strong>{marca.nome}</strong>, CNPJ {marca.cnpj}, {marca.cidade}. Encarregada pelo
        tratamento de dados: Daiane Gondim. Canal exclusivo: {MAIL}.
      </p>
    ),
  },
  {
    numero: "02",
    titulo: "O que este site não faz",
    corpo: (
      <ListaTecnica
        itens={[
          { codigo: "Cookies", descricao: <>Este site <strong>não usa cookies</strong> de rastreamento, publicidade ou análise comportamental. Por isso não existe banner de consentimento.</> },
          { codigo: "Formulários", descricao: "Não há formulário de cadastro, newsletter ou captura de contato. O contato é feito por e-mail, por iniciativa sua." },
          { codigo: "Terceiros", descricao: "Nenhum script de terceiro é carregado nas páginas: sem pixel de rede social, sem mapa de calor, sem CDN externo." },
        ]}
      />
    ),
  },
  {
    numero: "03",
    titulo: "Calculadora GEIO",
    corpo: (
      <p>
        Os números que você digita na Calculadora GEIO — quantidade de pessoas, horas perdidas e
        custo da hora técnica — são processados <strong>inteiramente no seu navegador</strong>. Nada
        é enviado para nossos servidores, nada é armazenado e nada é solicitado em troca do
        resultado. Ao fechar a página, os valores desaparecem.
      </p>
    ),
  },
  {
    numero: "04",
    titulo: "Dados que tratamos, e por quê",
    corpo: (
      <>
        <TabelaTecnica
          colunas={["Situação", "Dados", "Finalidade", "Base legal (LGPD)"]}
          linhas={[
            ["Você nos escreve", "Nome, e-mail e o que você contar na mensagem", "Responder, orçar, agendar", "Art. 7º, V — procedimentos preliminares de contrato"],
            ["Você compra o Diagnóstico", "Nome, e-mail, CPF ou CNPJ e dados de pagamento", "Processar a compra e entregar os artefatos", "Art. 7º, V — execução de contrato"],
            ["Emissão fiscal e contábil", "Dados de identificação e da transação", "Cumprir obrigação legal", "Art. 7º, II — obrigação legal"],
          ]}
        />
        <Nota>
          Os dados de pagamento são coletados e tratados diretamente pela <strong>Kiwify</strong>,
          que atua como operadora nessa etapa. A GEIO não tem acesso a número de cartão, e recebe da
          plataforma apenas os dados necessários para identificar o comprador e entregar o produto.
        </Nota>
      </>
    ),
  },
  {
    numero: "05",
    titulo: "Com quem compartilhamos",
    corpo: (
      <p>
        Com ninguém, exceto o estritamente necessário para operar: a plataforma de pagamento
        (Kiwify), o provedor de hospedagem do site e do e-mail, e autoridades públicas quando houver
        obrigação legal. <strong>Não vendemos, alugamos nem cedemos dados pessoais para fins
        comerciais.</strong>
      </p>
    ),
  },
  {
    numero: "06",
    titulo: "Por quanto tempo guardamos",
    corpo: (
      <ListaTecnica
        itens={[
          { codigo: "Contato", descricao: "Mensagens de e-mail: até 2 anos após o último contato, ou até você pedir a exclusão." },
          { codigo: "Compras", descricao: "Registros de transação: 5 anos, prazo do Código de Defesa do Consumidor." },
          { codigo: "Fiscal", descricao: "Documentos fiscais: pelo prazo exigido pela legislação tributária." },
        ]}
      />
    ),
  },
  {
    numero: "07",
    titulo: "Seus direitos",
    corpo: (
      <>
        <p>
          A Lei Geral de Proteção de Dados (Lei 13.709/2018) garante a você o direito de confirmar a
          existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados,
          solicitar anonimização, bloqueio ou eliminação de dados desnecessários, pedir a
          portabilidade, revogar consentimento e obter informação sobre compartilhamento.
        </p>
        <p>
          Como exercer cada um deles, com prazo e formato de resposta:{" "}
          <Link href="/transparencia">Centro de Transparência</Link>.
        </p>
      </>
    ),
  },
  {
    numero: "08",
    titulo: "Segurança e alterações",
    corpo: (
      <>
        <p>
          Adotamos medidas técnicas e administrativas para proteger os dados que tratamos, incluindo
          acesso restrito e transmissão criptografada. Nenhum sistema é absolutamente seguro; em caso
          de incidente com risco relevante, comunicamos você e a ANPD conforme a LGPD.
        </p>
        <p>Esta política pode ser atualizada. A data no topo da página indica a versão vigente.</p>
      </>
    ),
  },
];

export default function Privacidade() {
  return (
    <DocumentoLegal titulo="Política de Privacidade" atualizacao="13 de agosto de 2026" itens={ITENS} />
  );
}
