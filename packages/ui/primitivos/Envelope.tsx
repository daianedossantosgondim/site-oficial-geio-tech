import type { ReactNode } from "react";

/** Largura máxima de 1080 px e respiro lateral. Nada mais. */
export function Envelope({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`envelope ${className}`.trim()}>{children}</div>;
}
