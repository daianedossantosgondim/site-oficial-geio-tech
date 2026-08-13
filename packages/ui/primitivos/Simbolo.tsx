/**
 * Símbolo GEIO — grade 4×4, moldura de 1 unidade, célula superior
 * direita em cobalto. Geometria medida e homologada:
 * marca-geio/MANUAL-DE-MARCA.md §1.
 *
 * Inline por decisão: ~300 bytes, zero requisição HTTP.
 */
export function Simbolo({
  tamanho = 20,
  decorativo = true,
}: {
  tamanho?: number;
  decorativo?: boolean;
}) {
  const acessibilidade = decorativo
    ? { "aria-hidden": true as const, focusable: "false" as const }
    : { role: "img" as const, "aria-label": "GEIO" };

  return (
    <svg viewBox="0 0 100 100" width={tamanho} height={tamanho} {...acessibilidade}>
      {decorativo ? null : <title>GEIO Gestão Inteligente</title>}
      <path
        d="M0 0 H100 V100 H0 Z M25 25 H75 V75 H25 Z"
        fillRule="evenodd"
        fill="var(--cinza-tecnico)"
      />
      <rect x="75" y="0" width="25" height="25" fill="var(--azul-cobalto)" />
    </svg>
  );
}
