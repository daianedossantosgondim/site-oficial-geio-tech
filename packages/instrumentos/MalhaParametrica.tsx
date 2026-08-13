"use client";

import { parametrosDaMalha, geradorDeterministico } from "./calculo.mjs";
import type { Resultado } from "./calculo.mjs";

/**
 * A malha não tem estado próprio: é função dos três parâmetros.
 *
 *   pessoas → quantas camadas a estrutura tem
 *   horas   → o quanto essas camadas saem da ortogonal
 *   custo   → quantas células entram em estado de veto (cobalto)
 *
 * Sem resultado, desenha a grade 4×4 ortogonal — que é a leitura
 * visual de compatibilidade estrutural, não um estado vazio.
 */
export function MalhaParametrica({ resultado }: { resultado: Resultado | null }) {
  const figuras: React.ReactElement[] = [];

  if (!resultado) {
    figuras.push(
      <path
        key="ortogonal"
        d="M50 50 H150 V150 H50 Z M75 75 H125 V125 H75 Z"
        fillRule="evenodd"
        fill="var(--cinza-tecnico)"
      />,
      <rect key="celula" x={125} y={50} width={25} height={25} fill="var(--azul-cobalto)" />
    );
  } else {
    const p = parametrosDaMalha(resultado);
    const aleatorio = geradorDeterministico(p.semente);

    for (let i = 0; i < p.camadas; i++) {
      const recuo = i * (40 / p.camadas);
      const dx = (aleatorio() - 0.5) * 2 * p.desalinho;
      const dy = (aleatorio() - 0.5) * 2 * p.desalinho;
      const lado = 100 - recuo;
      const x = 100 - lado / 2 + dx;
      const y = 100 - lado / 2 + dy;
      const u = lado / 4;
      const opacidade = 0.22 + 0.78 * (i / Math.max(p.camadas - 1, 1));

      figuras.push(
        <path
          key={`m${i}`}
          d={
            `M${x} ${y} H${x + lado} V${y + lado} H${x} Z ` +
            `M${x + u} ${y + u} H${x + lado - u} V${y + lado - u} H${x + u} Z`
          }
          fillRule="evenodd"
          fill="var(--cinza-tecnico)"
          opacity={opacidade}
        />
      );

      // A célula em cobalto é o veto estrutural: aparece nas camadas
      // mais comprometidas, proporcionalmente ao custo da hora.
      if (aleatorio() < p.proporcaoVeto) {
        figuras.push(
          <rect
            key={`v${i}`}
            x={x + lado - u}
            y={y}
            width={u}
            height={u}
            fill="var(--azul-cobalto)"
            opacity={opacidade}
          />
        );
      }
    }
  }

  return (
    <svg viewBox="0 0 200 200" role="img" aria-labelledby="malha-titulo" preserveAspectRatio="xMidYMid meet">
      <title id="malha-titulo">Malha estrutural que responde aos parâmetros informados</title>
      <g>{figuras}</g>
    </svg>
  );
}
