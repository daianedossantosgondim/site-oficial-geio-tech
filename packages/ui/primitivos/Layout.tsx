import type { ReactNode } from "react";

/** Empilhamento por gap. Nunca por margem solta, que colapsa ou dobra. */
export function Pilha({ children, larga = false }: { children: ReactNode; larga?: boolean }) {
  return <div className={larga ? "pilha-larga" : "pilha"}>{children}</div>;
}

export function Grade({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`grade ${className}`.trim()}>{children}</div>;
}

export function DuasColunas({ children }: { children: ReactNode }) {
  return <div className="duas-colunas">{children}</div>;
}

/** Eyebrow monoespaçado, caixa-alta, tracking largo. */
export function Rotulo({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <p className="rotulo" id={id}>
      {children}
    </p>
  );
}

/** Ressalva com filete lateral. Registro de limite, não de destaque. */
export function Nota({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`nota ${className}`.trim()}>{children}</p>;
}
