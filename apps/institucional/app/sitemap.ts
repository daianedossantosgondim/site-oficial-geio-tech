import type { MetadataRoute } from "next";
import { marca } from "@geio/tokens";

/** Gerado por código: não existe sitemap escrito à mão para divergir. */
export default function sitemap(): MetadataRoute.Sitemap {
  const rotas: [string, number][] = [
    ["", 1.0],
    ["/diagnostico-preliminar-parametrico", 0.9],
    ["/varredura-in-company", 0.8],
    ["/implantacao-e-integracao", 0.7],
    ["/metodologia", 0.7],
    ["/sobre", 0.5],
    ["/faq", 0.5],
    ["/transparencia", 0.4],
    ["/termos", 0.3],
    ["/privacidade", 0.3],
  ];
  // /obrigado fica de fora de propósito: é destino de checkout, não
  // conteúdo público. Também declara noindex na própria rota.
  const agora = new Date();
  return rotas.map(([caminho, priority]) => ({
    url: `${marca.site}${caminho}`,
    lastModified: agora,
    priority,
  }));
}
