"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Simbolo } from "../primitivos/Simbolo";

export type ItemNavegacao = { rotulo: string; href: string };

/**
 * Um cabeçalho. Antes desta migração ele existia copiado em nove
 * arquivos HTML, e toda mudança institucional era multiplicada por
 * nove — foi o que tornou a duplicação a maior dívida do ecossistema.
 *
 * Cliente por um motivo específico: marcar aria-current="page" exige
 * saber a rota. A alternativa era ler o cabeçalho da requisição no
 * layout, o que opta TODAS as rotas para renderização dinâmica e
 * derruba a estratégia estática do projeto inteiro. Trocar estático
 * por dinâmico em dez rotas para economizar um punhado de bytes de
 * JavaScript seria péssimo negócio.
 */
export function Cabecalho({ itens }: { itens: ItemNavegacao[] }) {
  const rota = usePathname();

  return (
    <header className="topo">
      <div className="topo-interno">
        <Link className="marca" href="/" aria-current={rota === "/" ? "page" : undefined}>
          <Simbolo />
          <span>GEIO</span>
        </Link>
        <nav className="navegacao" aria-label="Navegação principal">
          {itens.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={rota === item.href ? "page" : undefined}
            >
              {item.rotulo}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
