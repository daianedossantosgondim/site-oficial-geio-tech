import type { Metadata, Viewport } from "next";
import { Cabecalho, Rodape } from "@geio/ui";
import { marca } from "@geio/tokens";
import { NAVEGACAO } from "@/conteudo/navegacao";

import "@geio/tokens/tokens.css";
import "@geio/ui/ui.css";

export const metadata: Metadata = {
  metadataBase: new URL(marca.site),
  title: {
    default: "GEIO | Arquitetura Operacional para Indústrias",
    template: "%s | GEIO",
  },
  description:
    "GEIO estrutura decisões operacionais e as torna previsíveis. Framework de arquitetura operacional para indústrias.",
  manifest: "/site.webmanifest",
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

/** Dados institucionais, uma vez, no layout. */
function OrganizacaoJsonLd() {
  const dados = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: marca.nome,
    url: marca.site,
    email: marca.email,
    logo: `${marca.site}/icon-512.png`,
    address: { "@type": "PostalAddress", addressLocality: "Patos de Minas", addressRegion: "MG", addressCountry: "BR" },
    sameAs: [marca.linkedin, marca.lattes],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="salto" href="#conteudo">
          Ir para o conteúdo
        </a>
        <Cabecalho itens={NAVEGACAO} />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Rodape />
        <OrganizacaoJsonLd />
      </body>
    </html>
  );
}
