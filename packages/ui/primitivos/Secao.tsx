import type { ReactNode } from "react";

/**
 * Bloco de conteúdo com filete superior e ritmo vertical.
 * `rotuloId` existe para dar nome acessível à região: seção sem nome
 * não é exposta como marco de navegação por leitor de tela.
 */
export function Secao({
  children,
  id,
  rotuladaPor,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  rotuladaPor?: string;
  className?: string;
}) {
  return (
    <section className={`secao ${className}`.trim()} id={id} aria-labelledby={rotuladaPor}>
      {children}
    </section>
  );
}

/** Primeira dobra da rota. Sem filete superior, respiro maior. */
export function Heroi({ children }: { children: ReactNode }) {
  return <section className="heroi">{children}</section>;
}

/**
 * Rótulo, título e subtítulo sempre nesta ordem — o olho entra pelo
 * eyebrow curto, ancora no título e só então lê a linha longa.
 */
export function SecaoCabecalho({
  rotulo,
  titulo,
  tituloId,
  subtitulo,
  nivel = 2,
}: {
  rotulo?: string;
  titulo: ReactNode;
  tituloId?: string;
  subtitulo?: ReactNode;
  nivel?: 1 | 2 | 3;
}) {
  const Titulo = `h${nivel}` as "h1" | "h2" | "h3";
  return (
    <div className="secao-cabecalho">
      {rotulo ? <p className="rotulo">{rotulo}</p> : null}
      <Titulo id={tituloId}>{titulo}</Titulo>
      {subtitulo ? <p className="subtitulo">{subtitulo}</p> : null}
    </div>
  );
}
