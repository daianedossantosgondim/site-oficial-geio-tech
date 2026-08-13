/**
 * Núcleo da Calculadora GEIO.
 *
 * Puro de propósito: sem DOM, sem React, sem rede. Isso é o que
 * permite testá-lo no CI e o que garante a afirmação publicada em
 * /privacidade §03 — os valores não saem do navegador porque não há
 * para onde saírem.
 */

/** 52 semanas ÷ 12 meses. Arredondar para 4 subestimaria o ano. */
export const SEMANAS_POR_MES = 4.33;

/** Jornada mensal de 220 h (44 h semanais, CLT). */
export const JORNADA_MENSAL = 220;

export const CAMPOS = [
  {
    id: "pessoas",
    piso: 1,
    teto: 10000,
    faltando: "Preencha o número de engenheiros ou analistas com um número.",
    zero: "O número de engenheiros ou analistas precisa ser maior que zero.",
    abaixoDoPiso: "Informe pelo menos 1 pessoa na operação.",
    acimaDoTeto: "Confira o número de pessoas: acima de 10.000 a leitura deixa de ser útil.",
  },
  {
    id: "horas",
    // Teto físico: uma semana tem 168 horas. Não é regra de negócio,
    // é o calendário.
    teto: 168,
    faltando: "Preencha as horas perdidas por pessoa na semana com um número.",
    zero: "As horas perdidas por pessoa na semana precisam ser maiores que zero.",
    acimaDoTeto: "Uma semana tem 168 horas — não é possível perder mais do que isso por pessoa.",
  },
  {
    id: "custo",
    teto: 100000,
    faltando: "Preencha o custo médio da hora técnica com um número.",
    zero: "O custo médio da hora técnica precisa ser maior que zero.",
    acimaDoTeto: "Confira o custo da hora: acima de R$ 100.000 a leitura deixa de ser útil.",
  },
];

/**
 * Aceita "90,50" e "90.50". O campo é type="text" justamente porque
 * type="number" descarta a vírgula, que é o separador decimal daqui.
 */
export function paraNumero(texto) {
  if (typeof texto !== "string") return NaN;
  const limpo = texto.trim().replace(/\s/g, "").replace(",", ".");
  if (limpo === "" || !/^\d*\.?\d+$/.test(limpo)) return NaN;
  return parseFloat(limpo);
}

/**
 * Valida na ordem dos campos e devolve o primeiro problema, com o
 * campo que deve receber foco. Mensagem escrita por extenso em cada
 * caso: concatenar pedaço de frase quebra a concordância.
 */
export function validar(entrada) {
  for (const campo of CAMPOS) {
    const valor = paraNumero(entrada[campo.id]);
    if (Number.isNaN(valor)) return { campo: campo.id, mensagem: campo.faltando };
    if (valor <= 0) return { campo: campo.id, mensagem: campo.zero };
    if (campo.piso && valor < campo.piso) return { campo: campo.id, mensagem: campo.abaixoDoPiso };
    if (campo.teto && valor > campo.teto) return { campo: campo.id, mensagem: campo.acimaDoTeto };
  }
  return null;
}

export function calcular(entrada) {
  const pessoas = paraNumero(entrada.pessoas);
  const horas = paraNumero(entrada.horas);
  const custo = paraNumero(entrada.custo);
  const horasMes = pessoas * horas * SEMANAS_POR_MES;
  return {
    pessoas,
    horas,
    custo,
    horasMes,
    erosaoAno: horasMes * custo * 12,
    postos: horasMes / JORNADA_MENSAL,
  };
}

const inteiro = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 });
const umaCasa = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 });
const dinheiro = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export const formatar = {
  horas: (n) => `${inteiro.format(n)} h`,
  dinheiro: (n) => dinheiro.format(n),
};

/**
 * Reescreve o resultado na unidade em que a decisão acontece.
 * Duas cifras são dado bruto; "o equivalente a X postos de trabalho"
 * é a mesma informação em moeda que um decisor industrial já usa.
 */
export function leituraHumana(r) {
  const pessoasInt = Math.round(r.pessoas);
  const plural = (n, s, p) => (n === 1 ? s : p);

  let equivalente;
  if (r.postos < 0.25) {
    equivalente = { texto: "menos de um quarto de um posto de trabalho", plural: false };
  } else if (r.postos < 1) {
    equivalente = {
      texto: `cerca de ${inteiro.format(r.postos * 100)}% de um posto de trabalho`,
      plural: false,
    };
  } else {
    const postosTexto = umaCasa.format(r.postos);
    equivalente = {
      texto: `${postosTexto} ${postosTexto === "1" ? "posto" : "postos"} de trabalho em tempo integral`,
      plural: postosTexto !== "1",
    };
  }

  return (
    `${pessoasInt}${plural(pessoasInt, " pessoa perdendo ", " pessoas perdendo ")}` +
    `${umaCasa.format(r.horas)}${plural(r.horas, " hora", " horas")} por semana ` +
    `${plural(pessoasInt, "soma", "somam")} ${inteiro.format(r.horasMes)} horas por mês — ` +
    `o equivalente a ${equivalente.texto}${equivalente.plural ? " dedicados" : " dedicado"} ` +
    `apenas a compensar a arquitetura atual.`
  );
}

/**
 * Parâmetros da malha. A figura não tem estado próprio: é função dos
 * três valores. Gerador determinístico, então o mesmo cenário produz
 * sempre a mesma figura.
 */
export function parametrosDaMalha(r) {
  const limitar = (v, min, max) => Math.max(min, Math.min(max, v));
  return {
    camadas: Math.round(limitar(r.pessoas / 2, 1, 10)),
    desalinho: limitar(r.horas, 0, 20) * 0.75,
    proporcaoVeto: limitar(r.custo / 200, 0.1, 1),
    semente: Math.round(r.pessoas * 31 + r.horas * 17 + r.custo),
  };
}

export function geradorDeterministico(semente) {
  let s = semente;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function descreverMalha(p) {
  const grau = p.desalinho < 3 ? "leve" : p.desalinho < 9 ? "relevante" : "crítico";
  return (
    `${p.camadas} ${p.camadas === 1 ? "camada" : "camadas"} com desalinhamento ${grau} — ` +
    `a estrutura deixa de ser ortogonal à medida que os parâmetros pioram.`
  );
}

export const TEXTO_MALHA_INICIAL = "Estrutura ortogonal — nenhum parâmetro informado";
export const TEXTO_LEITURA_INICIAL = "Preencha os três campos para ver a leitura da sua operação.";
