import Link from "next/link";
import type { Pergunta } from "@geio/ui";
import { produto } from "@geio/tokens";

/**
 * Fonte única das perguntas. A rota /faq e o JSON-LD da página de
 * produto leem daqui — texto e dado estruturado não podem divergir.
 */
export const PERGUNTAS_PRODUTO: Pergunta[] = [
  {
    pergunta: "Preciso agendar reunião antes de comprar?",
    resposta:
      "Não. O produto é autoatendido: pagamento único e entrega digital imediata, sem agendamento e sem reunião prévia. O contato com a Arquiteta-Chefe existe para dúvidas sobre o conteúdo entregue, não como etapa obrigatória de venda.",
    textoSimples:
      "Não. O produto é autoatendido: pagamento único e entrega digital imediata, sem agendamento e sem reunião prévia.",
  },
  {
    pergunta: "Isso é assinatura?",
    resposta: `Não. É pagamento único de ${produto.precoTexto}, sem mensalidade e sem renovação automática.`,
    textoSimples: `Não. É pagamento único de ${produto.precoTexto}, sem mensalidade e sem renovação automática.`,
  },
  {
    pergunta: "Preciso trocar meu ERP?",
    resposta:
      "Não. O diagnóstico parte do princípio de que o ERP registra, mas não estrutura decisão. O trabalho é sobre a arquitetura de decisão em torno do sistema que já existe — não sobre substituí-lo.",
    textoSimples:
      "Não. O ERP registra, mas não estrutura decisão. O trabalho é sobre a arquitetura de decisão em torno do sistema que já existe.",
  },
  {
    pergunta: "Qual a diferença entre isto e a Varredura In-Company?",
    resposta: (
      <>
        Este é uma leitura autoatendida, entregue digitalmente, sem visita. A{" "}
        <Link href="/varredura-in-company">Varredura Paramétrica In-Company</Link> é a investigação
        presencial que cobre a operação inteira, com entrevistas por setor, observação de fluxo e
        cálculo de IIO e CCS sobre dados reais da sua empresa.
      </>
    ),
    textoSimples:
      "O Diagnóstico é uma leitura autoatendida, entregue digitalmente, sem visita. A Varredura é a investigação presencial que cobre a operação inteira, com cálculo de IIO e CCS sobre dados reais.",
  },
  {
    pergunta: "Posso desistir da compra?",
    resposta: (
      <>
        Sim. O artigo 49 do Código de Defesa do Consumidor garante 7 dias corridos para desistir,
        contados do recebimento. O pedido é feito por e-mail e o valor é devolvido integralmente,
        pelo mesmo meio de pagamento. Ver <Link href="/termos">Termos de Uso</Link>.
      </>
    ),
    textoSimples:
      "Sim. O artigo 49 do Código de Defesa do Consumidor garante 7 dias corridos para desistir, contados do recebimento, com devolução integral.",
  },
  {
    pergunta: "Os dados que digito na calculadora ficam guardados?",
    resposta: (
      <>
        Não. O cálculo roda inteiramente no seu navegador: nada é enviado para nossos servidores,
        nada é armazenado e nada é solicitado em troca do resultado. Ao fechar a página, os valores
        desaparecem. Ver <Link href="/privacidade">Política de Privacidade</Link>.
      </>
    ),
    textoSimples:
      "Não. O cálculo roda inteiramente no seu navegador. Nada é enviado, nada é armazenado e nada é solicitado em troca do resultado.",
  },
  {
    pergunta: "Serve para qual porte de empresa?",
    resposta:
      "Indústrias de pequeno e médio porte com operação produtiva ou logística complexa, que já utilizam ERP mas ainda dependem de planilhas e mediação manual para decidir.",
    textoSimples:
      "Indústrias de pequeno e médio porte com operação produtiva ou logística complexa, que já utilizam ERP mas ainda dependem de planilhas para decidir.",
  },
];

export const PERGUNTAS_FRAMEWORK: Pergunta[] = [
  {
    pergunta: "O que significa GEIO, e é consultoria?",
    resposta:
      "GEIO é a sigla de Gestão Estrutural da Incompatibilidade Organizacional. E não, não é consultoria: é um framework de arquitetura operacional — princípios, método, indicadores e governança. A Varredura Paramétrica In-Company é a aplicação prática desse framework em campo, mas o framework existe independentemente dela.",
    textoSimples:
      "GEIO é a sigla de Gestão Estrutural da Incompatibilidade Organizacional — um framework de arquitetura operacional, não uma consultoria. A Varredura In-Company é a aplicação prática dele em campo.",
  },
  {
    pergunta: "Por que o preço da Varredura varia?",
    resposta:
      "Porque o escopo cobre a empresa inteira, e o tamanho real do trabalho depende de quantos setores e macroprocessos existem. O enquadramento na faixa é feito na fase de alinhamento de escopo, antes da contratação.",
    textoSimples:
      "Porque o escopo cobre a empresa inteira e o tamanho do trabalho depende do número de setores e macroprocessos. O enquadramento é feito antes da contratação.",
  },
  {
    pergunta: "O que a NR-1 tem a ver com isso?",
    resposta:
      "A obrigatoriedade de gerenciamento formal dos fatores de risco psicossocial está em vigor desde maio de 2025. Desde 26 de maio de 2026, a fiscalização da NR-1 tem caráter punitivo, com possibilidade efetiva de autuação para quem não comprove essa gestão. A CCS calculada na Varredura é registro documental dessa gestão.",
    textoSimples:
      "Obrigatória desde maio de 2025, com fiscalização punitiva da NR-1 desde 26 de maio de 2026. A CCS calculada na Varredura é registro documental dessa gestão.",
  },
  {
    pergunta: "Há suporte após a entrega?",
    resposta: (
      <>
        Sim. Contato institucional direto com a Arquiteta-Chefe por e-mail:{" "}
        <a href="mailto:daianegondim@unipam.edu.br">daianegondim@unipam.edu.br</a>. Operações que
        concluem a Varredura podem contratar a{" "}
        <Link href="/implantacao-e-integracao">Implantação e Integração</Link>, que executa o Plano
        de Compatibilização e mede o resultado.
      </>
    ),
    textoSimples:
      "Sim. Contato direto com a Arquiteta-Chefe por e-mail. Operações que concluem a Varredura podem contratar a Implantação e Integração.",
  },
  {
    pergunta: "Como agendo uma conversa?",
    resposta: (
      <>
        Por e-mail. Agendamento e dúvidas são tratados exclusivamente por{" "}
        <a href="mailto:daianegondim@unipam.edu.br">daianegondim@unipam.edu.br</a> — canal único,
        com registro formal da solicitação.
      </>
    ),
    textoSimples:
      "Por e-mail. Agendamento e dúvidas são tratados exclusivamente por daianegondim@unipam.edu.br, canal único com registro formal.",
  },
];
