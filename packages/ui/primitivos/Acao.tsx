import type { ReactNode } from "react";

/**
 * Botão de conversão.
 *
 * A assinatura obriga os três elementos de um CTA que funciona:
 * verbo acionável no rótulo, `expectativa` dizendo o que acontece a
 * seguir, e `valor` reduzindo o risco percebido. Os dois últimos são
 * opcionais no tipo mas exigidos em revisão — um CTA sem expectativa
 * declarada é um salto no escuro para quem clica.
 */
export function Acao({
  href,
  children,
  externo = false,
  expectativa,
  valor,
  espacoAcima = false,
}: {
  href: string;
  children: ReactNode;
  externo?: boolean;
  expectativa?: ReactNode;
  valor?: ReactNode;
  espacoAcima?: boolean;
}) {
  const props = externo ? { target: "_blank", rel: "noopener" } : {};
  return (
    <>
      <a className={`acao ${espacoAcima ? "espaco-acima" : ""}`.trim()} href={href} {...props}>
        {children}
      </a>
      {expectativa || valor ? (
        <p className="contato-linha">
          {expectativa}
          {expectativa && valor ? " " : null}
          {valor}
        </p>
      ) : null}
    </>
  );
}
