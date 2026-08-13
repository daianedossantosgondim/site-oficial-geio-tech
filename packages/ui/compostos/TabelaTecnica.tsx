import type { ReactNode } from "react";

/**
 * Tabela de dados. O contêiner rola sozinho: conteúdo largo nunca
 * pode fazer o corpo da página rolar na horizontal.
 */
export function TabelaTecnica({
  colunas,
  linhas,
  legenda,
}: {
  colunas: string[];
  linhas: ReactNode[][];
  legenda?: string;
}) {
  return (
    <div className="envolve-tabela">
      <table>
        {legenda ? <caption className="rotulo">{legenda}</caption> : null}
        <thead>
          <tr>
            {colunas.map((c) => (
              <th scope="col" key={c}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha, i) => (
            <tr key={i}>
              {linha.map((celula, j) => (
                <td key={j} className={j > 0 && typeof celula === "string" && /^[\d.,%\sR$–—-]+$/.test(celula) ? "valor" : undefined}>
                  {celula}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
