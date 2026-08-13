import type { ReactNode } from "react";

export type Pergunta = { pergunta: string; resposta: ReactNode; textoSimples: string };

/**
 * <details>/<summary> nativos: abrir e fechar não custa uma linha de
 * JavaScript, e o comportamento de teclado já vem do navegador.
 */
export function FAQ({ perguntas }: { perguntas: Pergunta[] }) {
  return (
    <div className="faq">
      {perguntas.map((p, i) => (
        <details key={i}>
          <summary>
            <span className="codigo">{String(i + 1).padStart(2, "0")}</span>
            <span>{p.pergunta}</span>
          </summary>
          <p>{p.resposta}</p>
        </details>
      ))}
    </div>
  );
}

/** Dados estruturados derivados das mesmas perguntas — nunca redigitados. */
export function faqParaJsonLd(perguntas: Pergunta[]) {
  return {
    "@type": "FAQPage",
    mainEntity: perguntas.map((p) => ({
      "@type": "Question",
      name: p.pergunta,
      acceptedAnswer: { "@type": "Answer", text: p.textoSimples },
    })),
  };
}
