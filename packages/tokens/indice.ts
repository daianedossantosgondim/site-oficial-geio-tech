/**
 * Espelho tipado dos tokens, para uso em TypeScript (geração de imagem
 * OG, testes de contraste, metadata). A fonte visual continua sendo
 * tokens.css — este arquivo não pode divergir dele, e o script
 * scripts/verificar-contraste.mjs falha o build se divergir.
 */
export const cores = {
  pretoProfundo: "#0a0a0a",
  cinzaTecnico: "#b0b0b0",
  azulCobalto: "#1a3aff",
  cobaltoLegivel: "#5b7bff",
  texto: "#f2f2f4",
  textoLeitura: "#e6e6ea",
  textoTenue: "#82828d",
  superficie: "#101014",
  superficieAlta: "#16161c",
  borda: "#1e1e26",
  bordaForte: "#2a2a34",
} as const;

/** Pares que o CI verifica. Mínimo em razão de contraste WCAG 2.1. */
export const paresDeContraste = [
  { nome: "corpo sobre fundo", frente: cores.textoLeitura, fundo: cores.pretoProfundo, minimo: 4.5 },
  { nome: "título sobre fundo", frente: cores.texto, fundo: cores.pretoProfundo, minimo: 4.5 },
  { nome: "apoio sobre fundo", frente: cores.cinzaTecnico, fundo: cores.pretoProfundo, minimo: 4.5 },
  { nome: "rótulo sobre fundo", frente: cores.textoTenue, fundo: cores.pretoProfundo, minimo: 4.5 },
  { nome: "cobalto legível sobre fundo", frente: cores.cobaltoLegivel, fundo: cores.pretoProfundo, minimo: 4.5 },
  { nome: "branco sobre botão cobalto", frente: "#ffffff", fundo: cores.azulCobalto, minimo: 4.5 },
] as const;

export const marca = {
  nome: "GEIO Gestão Inteligente",
  descritor: "Gestão Inteligente",
  cnpj: "60.525.751/0001-53",
  cidade: "Patos de Minas — MG",
  email: "daianegondim@unipam.edu.br",
  linkedin: "https://www.linkedin.com/in/daianegondim",
  lattes: "https://lattes.cnpq.br/4591515697537753",
  incubadora: "Empresa residente na Farol Incubadora de Empresas (FEPAM).",
  site: "https://geio.tech",
} as const;

/** Fonte única do produto. Preço muda aqui, e só aqui. */
export const produto = {
  nome: "Diagnóstico Preliminar Paramétrico GEIO",
  preco: 497,
  precoTexto: "R$ 497",
  moeda: "BRL",
  checkout: "https://pay.kiwify.com.br/fk2GlyS",
  artefatos: [
    "Laudo de Diagnóstico Estrutural",
    "Matriz Paramétrica de Rastreamento",
    "Termo de Licença de Uso",
  ],
} as const;
