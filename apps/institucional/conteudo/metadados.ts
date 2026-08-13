import type { Metadata } from "next";
import { marca } from "@geio/tokens";

const BASE = marca.site;

/**
 * Metadados de rota. Centralizado para que título, descrição,
 * canonical e Open Graph nunca divirjam entre si — divergência entre
 * eles é a causa mais comum de card errado em rede social.
 */
export function metadadosDaRota({
  titulo,
  descricao,
  caminho,
  imagem = "/og-geio.png",
}: {
  titulo: string;
  descricao: string;
  caminho: string;
  imagem?: string;
}): Metadata {
  const url = `${BASE}${caminho}`;
  return {
    title: titulo,
    description: descricao,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: marca.nome,
      locale: "pt_BR",
      title: titulo,
      description: descricao,
      url,
      images: [{ url: imagem, width: 1200, height: 630, alt: "Marca GEIO sobre fundo preto" }],
    },
    twitter: { card: "summary_large_image", title: titulo, description: descricao, images: [imagem] },
  };
}
