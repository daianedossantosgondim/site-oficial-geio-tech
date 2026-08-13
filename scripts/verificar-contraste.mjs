/**
 * Recalcula o contraste de todos os pares declarados e falha o build
 * se algum cair abaixo do mínimo. Também confere que tokens.css e o
 * espelho tipado não divergiram.
 *
 * Isto é o veto estrutural aplicado à paleta: a cor não pode derivar
 * em silêncio entre uma sessão e outra.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = join(aqui, "..");

const css = readFileSync(join(raiz, "packages/tokens/tokens.css"), "utf8");
const ts = readFileSync(join(raiz, "packages/tokens/indice.ts"), "utf8");

const canal = (c) => {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};
const luminancia = (hex) => {
  const h = hex.replace("#", "");
  return (
    0.2126 * canal(parseInt(h.slice(0, 2), 16)) +
    0.7152 * canal(parseInt(h.slice(2, 4), 16)) +
    0.0722 * canal(parseInt(h.slice(4, 6), 16))
  );
};
const razao = (a, b) => {
  const [x, y] = [luminancia(a), luminancia(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

const doCss = (nome) => {
  const m = css.match(new RegExp(`--${nome}:\\s*(#[0-9a-fA-F]{6})`));
  if (!m) {
    console.error(`FALHA: token --${nome} não encontrado em tokens.css`);
    process.exit(1);
  }
  return m[1].toLowerCase();
};

const pares = [
  ["corpo sobre fundo", doCss("texto-leitura"), doCss("preto-profundo"), 4.5],
  ["título sobre fundo", doCss("texto"), doCss("preto-profundo"), 4.5],
  ["apoio sobre fundo", doCss("cinza-tecnico"), doCss("preto-profundo"), 4.5],
  ["rótulo sobre fundo", doCss("texto-tenue"), doCss("preto-profundo"), 4.5],
  ["cobalto legível (texto e foco)", doCss("cobalto-legivel"), doCss("preto-profundo"), 4.5],
  ["branco sobre botão cobalto", "#ffffff", doCss("azul-cobalto"), 4.5],
];

let falhou = false;
console.log("Contraste — WCAG 2.1, luminância relativa\n");
for (const [nome, frente, fundo, minimo] of pares) {
  const r = razao(frente, fundo);
  const ok = r >= minimo;
  if (!ok) falhou = true;
  console.log(`  ${ok ? "ok  " : "FALHA"} ${r.toFixed(2)}:1  (mín. ${minimo})  ${nome}`);
}

// O cobalto puro reprova como texto por definição — ele é cor de
// preenchimento. O teste garante que ninguém o promova a letra.
const cobaltoPuro = razao(doCss("azul-cobalto"), doCss("preto-profundo"));
console.log(
  `\n  nota  ${cobaltoPuro.toFixed(2)}:1  azul-cobalto sobre o fundo — reprova como texto ` +
    `por natureza; é cor de preenchimento. Use --cobalto-legivel para letra e foco.`
);

// Espelho tipado não pode divergir do CSS.
for (const [nomeTs, nomeCss] of [
  ["pretoProfundo", "preto-profundo"],
  ["cinzaTecnico", "cinza-tecnico"],
  ["azulCobalto", "azul-cobalto"],
  ["cobaltoLegivel", "cobalto-legivel"],
  ["texto", "texto"],
  ["textoLeitura", "texto-leitura"],
  ["textoTenue", "texto-tenue"],
]) {
  const m = ts.match(new RegExp(`${nomeTs}:\\s*"(#[0-9a-fA-F]{6})"`));
  if (!m || m[1].toLowerCase() !== doCss(nomeCss)) {
    console.error(`\nFALHA: ${nomeTs} divergiu de --${nomeCss} (${m?.[1]} vs ${doCss(nomeCss)})`);
    falhou = true;
  }
}

if (falhou) {
  console.error("\nContraste ou espelho de tokens reprovado.");
  process.exit(1);
}
console.log("\nTokens conferidos.");
