import Link from "next/link";

export type Etapa = { rotulo: string; href?: string };

/**
 * A esteira comercial, na ordem fixa do canon. `atual` marca a etapa
 * da rota corrente com aria-current="step".
 */
export function Sequencia({ etapas, atual }: { etapas: Etapa[]; atual?: string }) {
  return (
    <nav className="sequencia" aria-label="Sequência de ofertas">
      {etapas.map((etapa, i) => (
        <span key={etapa.rotulo} style={{ display: "contents" }}>
          {i > 0 ? (
            <span className="seta" aria-hidden="true">
              →
            </span>
          ) : null}
          {etapa.rotulo === atual ? (
            <span className="etapa etapa-atual" aria-current="step">
              {etapa.rotulo}
            </span>
          ) : etapa.href ? (
            <Link href={etapa.href}>{etapa.rotulo}</Link>
          ) : (
            <span className="etapa">{etapa.rotulo}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
