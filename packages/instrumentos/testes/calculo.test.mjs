import test from "node:test";
import assert from "node:assert/strict";
import {
  calcular,
  descreverMalha,
  formatar,
  geradorDeterministico,
  leituraHumana,
  paraNumero,
  parametrosDaMalha,
  validar,
} from "../calculo.mjs";

// Estes casos vieram de verificação manual em navegador nos dias
// 2026-08-13 e 14. Viraram teste para não precisarem ser refeitos à mão.

test("aceita vírgula como separador decimal", () => {
  assert.equal(paraNumero("90,50"), 90.5);
  assert.equal(paraNumero("90.50"), 90.5);
  assert.equal(paraNumero("  6,5 "), 6.5);
});

test("rejeita o que não é número", () => {
  for (const entrada of ["", "abc", "1e5", "--3", "9,9,9", "R$ 90"]) {
    assert.ok(Number.isNaN(paraNumero(entrada)), `deveria rejeitar: ${entrada}`);
  }
});

test("campo vazio reprova no primeiro campo, com mensagem própria", () => {
  const p = validar({ pessoas: "", horas: "6", custo: "90" });
  assert.equal(p?.campo, "pessoas");
  assert.match(p.mensagem, /Preencha o número de engenheiros/);
});

test("zero reprova em cada campo", () => {
  assert.match(validar({ pessoas: "0", horas: "6", custo: "90" }).mensagem, /maior que zero/);
  assert.match(validar({ pessoas: "8", horas: "0", custo: "90" }).mensagem, /maiores que zero/);
  assert.match(validar({ pessoas: "8", horas: "6", custo: "0" }).mensagem, /maior que zero/);
});

test("meia pessoa reprova pelo piso", () => {
  assert.match(validar({ pessoas: "0,5", horas: "6", custo: "90" }).mensagem, /pelo menos 1 pessoa/);
});

test("teto de horas é físico: uma semana tem 168 horas", () => {
  assert.equal(validar({ pessoas: "8", horas: "168", custo: "90" }), null);
  assert.match(validar({ pessoas: "8", horas: "169", custo: "90" }).mensagem, /168 horas/);
});

test("tetos de sanidade em pessoas e custo", () => {
  assert.match(validar({ pessoas: "10001", horas: "6", custo: "90" }).mensagem, /10\.000/);
  assert.match(validar({ pessoas: "8", horas: "6", custo: "100001" }).mensagem, /100\.000/);
});

test("entrada válida não produz problema", () => {
  assert.equal(validar({ pessoas: "8", horas: "6", custo: "90" }), null);
});

test("cálculo usa 4,33 semanas por mês", () => {
  const r = calcular({ pessoas: "8", horas: "6", custo: "90" });
  assert.equal(Math.round(r.horasMes), 208);
  assert.equal(Math.round(r.erosaoAno), 224467);
});

test("formatação em pt-BR", () => {
  assert.equal(formatar.horas(208.32), "208 h");
  assert.match(formatar.dinheiro(224467), /^R\$\s?224\.467$/);
});

test("concordância: uma pessoa, verbo no singular", () => {
  const texto = leituraHumana(calcular({ pessoas: "1", horas: "5", custo: "80" }));
  assert.match(texto, /^1 pessoa perdendo 5 horas por semana soma /);
  assert.ok(!texto.includes("somam"), "não deve pluralizar o verbo para 1 pessoa");
});

test("concordância: uma hora no singular", () => {
  const texto = leituraHumana(calcular({ pessoas: "1", horas: "1", custo: "80" }));
  assert.match(texto, /perdendo 1 hora por semana/);
});

test("decimal digitado é preservado no texto", () => {
  const texto = leituraHumana(calcular({ pessoas: "3", horas: "1,5", custo: "70" }));
  assert.match(texto, /1,5 horas/, "não pode arredondar 1,5 para 2 no texto");
});

test("particípio concorda com o número de postos", () => {
  const um = leituraHumana(calcular({ pessoas: "8", horas: "6", custo: "90" }));
  assert.match(um, /de um posto de trabalho dedicado /);

  const varios = leituraHumana(calcular({ pessoas: "40", horas: "10", custo: "150" }));
  assert.match(varios, /postos de trabalho em tempo integral dedicados /);
});

test("malha é determinística para o mesmo cenário", () => {
  const r = calcular({ pessoas: "12", horas: "8", custo: "120" });
  const a = geradorDeterministico(parametrosDaMalha(r).semente);
  const b = geradorDeterministico(parametrosDaMalha(r).semente);
  for (let i = 0; i < 20; i++) assert.equal(a(), b());
});

test("malha respeita os limites de camadas", () => {
  assert.equal(parametrosDaMalha(calcular({ pessoas: "1", horas: "1", custo: "1" })).camadas, 1);
  assert.equal(parametrosDaMalha(calcular({ pessoas: "500", horas: "1", custo: "1" })).camadas, 10);
});

test("descrição textual da malha acompanha a gravidade", () => {
  const leve = descreverMalha(parametrosDaMalha(calcular({ pessoas: "4", horas: "2", custo: "80" })));
  const grave = descreverMalha(parametrosDaMalha(calcular({ pessoas: "20", horas: "15", custo: "180" })));
  assert.match(leve, /desalinhamento leve/);
  assert.match(grave, /desalinhamento crítico/);
});
