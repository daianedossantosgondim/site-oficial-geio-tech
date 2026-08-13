import type { ReactNode } from "react";

/** "É / não é", "faz sentido / não faz". Duas colunas semânticas. */
export function ParEscopo({
  esquerda,
  direita,
}: {
  esquerda: { rotulo: string; itens: ReactNode[] };
  direita: { rotulo: string; itens: ReactNode[] };
}) {
  return (
    <div className="duas-colunas">
      {[esquerda, direita].map((lado) => (
        <div key={lado.rotulo}>
          <p className="rotulo">{lado.rotulo}</p>
          <ul>
            {lado.itens.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
