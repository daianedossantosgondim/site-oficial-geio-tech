import type { ReactNode } from "react";

export type ItemTecnico = { codigo: string; descricao: ReactNode };

/** Par código + descrição. Duas colunas no desktop, empilhado no celular. */
export function ListaTecnica({ itens, className = "" }: { itens: ItemTecnico[]; className?: string }) {
  return (
    <ul className={`lista-tecnica ${className}`.trim()}>
      {itens.map((item, i) => (
        <li key={i}>
          <span className="codigo">{item.codigo}</span>
          <span className="descricao">{item.descricao}</span>
        </li>
      ))}
    </ul>
  );
}
