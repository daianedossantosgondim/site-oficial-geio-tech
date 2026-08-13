"use client";

import { useId, useRef, useState } from "react";
import {
  CAMPOS,
  calcular,
  descreverMalha,
  formatar,
  leituraHumana,
  parametrosDaMalha,
  validar,
  TEXTO_LEITURA_INICIAL,
  TEXTO_MALHA_INICIAL,
} from "./calculo.mjs";
import type { Entrada, IdCampo, Resultado } from "./calculo.mjs";
import { MalhaParametrica } from "./MalhaParametrica";

const AJUDA: Record<IdCampo, { rotulo: string; ajuda: string; modo: "numeric" | "decimal"; exemplo: string }> = {
  pessoas: {
    rotulo: "Engenheiros / analistas na operação",
    ajuda: "Quem toma decisão técnica com base em dado. Não é o total de funcionários.",
    modo: "numeric",
    exemplo: "0",
  },
  horas: {
    rotulo: "Horas perdidas por pessoa / semana",
    ajuda:
      "Tempo gasto consolidando planilha, refazendo trabalho, procurando informação e reprogramando. Estimativa basta.",
    modo: "decimal",
    exemplo: "0",
  },
  custo: {
    rotulo: "Custo médio da hora técnica (R$)",
    ajuda: "Salário mais encargos, dividido pelas horas trabalhadas. Vírgula ou ponto, tanto faz.",
    modo: "decimal",
    exemplo: "0,00",
  },
};

const VAZIO: Entrada = { pessoas: "", horas: "", custo: "" };

/**
 * Calculadora GEIO.
 *
 * `revelaAoCalcular` parametriza o papel do instrumento em vez de
 * duplicar o componente: no institucional ela é portão — a oferta só
 * aparece depois que a pessoa vê o próprio número; na página do
 * produto o preço fica sempre visível, porque ali esconder a oferta
 * seria teatro.
 *
 * Nada aqui vai para a rede. É o que sustenta a afirmação publicada
 * em /privacidade §03.
 */
export function CalculadoraGEIO({
  revelaAoCalcular,
  aoCalcular,
}: {
  revelaAoCalcular?: React.ReactNode;
  aoCalcular?: (r: Resultado) => void;
}) {
  const [entrada, setEntrada] = useState<Entrada>(VAZIO);
  const [problema, setProblema] = useState<{ campo: IdCampo; mensagem: string } | null>(null);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const refs = useRef<Partial<Record<IdCampo, HTMLInputElement | null>>>({});
  const prefixo = useId();

  const idAjuda = (campo: IdCampo) => `${prefixo}-ajuda-${campo}`;

  function alterar(campo: IdCampo, valor: string) {
    setEntrada((atual) => ({ ...atual, [campo]: valor }));
    // O erro some assim que a pessoa volta a digitar: manter a
    // mensagem enquanto ela corrige é ruído, não informação.
    if (problema) setProblema(null);
  }

  function enviar(evento: React.FormEvent) {
    evento.preventDefault();
    const encontrado = validar(entrada);
    if (encontrado) {
      setProblema(encontrado);
      setResultado(null);
      refs.current[encontrado.campo]?.focus();
      return;
    }
    const r = calcular(entrada);
    setResultado(r);
    aoCalcular?.(r);
  }

  const legendaMalha = resultado ? descreverMalha(parametrosDaMalha(resultado)) : TEXTO_MALHA_INICIAL;

  return (
    <div className="parametrico-grade">
      <form className="simulador" onSubmit={enviar} noValidate>
        <fieldset className="campos-grupo">
          <legend className="rotulo">Sua operação hoje</legend>
          <div className="campos campos-empilhados">
            {CAMPOS.map((campo) => {
              const meta = AJUDA[campo.id as IdCampo];
              const id = `${prefixo}-${campo.id}`;
              return (
                <div className="campo" key={campo.id}>
                  <label htmlFor={id}>{meta.rotulo}</label>
                  <input
                    id={id}
                    type="text"
                    inputMode={meta.modo}
                    autoComplete="off"
                    placeholder={meta.exemplo}
                    aria-describedby={idAjuda(campo.id as IdCampo)}
                    aria-invalid={problema?.campo === campo.id || undefined}
                    value={entrada[campo.id as IdCampo]}
                    ref={(el) => {
                      refs.current[campo.id as IdCampo] = el;
                    }}
                    onChange={(e) => alterar(campo.id as IdCampo, e.target.value)}
                  />
                  <p className="ajuda" id={idAjuda(campo.id as IdCampo)}>
                    {meta.ajuda}
                  </p>
                </div>
              );
            })}
          </div>
        </fieldset>

        <button type="submit" className="botao-secundario">
          Ver quanto isso custa por ano
        </button>

        <p className="erro" role="alert" hidden={!problema}>
          {problema?.mensagem ?? ""}
        </p>

        {/* Área de leitura permanente, com travessão no lugar do número:
            nada aparece do nada empurrando o conteúdo abaixo. */}
        <div className="resultado" aria-live="polite">
          <div>
            <p className="rotulo">Erosão Financeira — leitura preliminar</p>
          </div>
          <div className="resultado-linhas">
            <div>
              <p className="rotulo">Horas perdidas / mês</p>
              <p className="numero">{resultado ? formatar.horas(resultado.horasMes) : "—"}</p>
            </div>
            <div>
              <p className="rotulo">Erosão acumulada / ano</p>
              <p className="numero">{resultado ? formatar.dinheiro(resultado.erosaoAno) : "—"}</p>
            </div>
          </div>
          <p className="leitura">{resultado ? leituraHumana(resultado) : TEXTO_LEITURA_INICIAL}</p>
          <p className="nota nota-limite">
            Indicador paramétrico de referência, calculado sobre o que você digitou. Não é valor
            contábil auditado e não é diagnóstico — <strong>é aritmética sobre a sua estimativa</strong>.
            Identificar <em>onde</em> a arquitetura produz essa perda é o que o Laudo faz.
          </p>
        </div>

        {resultado && revelaAoCalcular ? revelaAoCalcular : null}
      </form>

      <figure className="parametrico">
        <MalhaParametrica resultado={resultado} />
        <figcaption className="rotulo" aria-live="polite">
          {legendaMalha}
        </figcaption>
      </figure>
    </div>
  );
}
