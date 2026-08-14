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
    `GEIO — ${marca.siglaExtenso}. Framework de arquitetura operacional para indústrias: ` +
    "estrutura decisões operacionais e as torna previsíveis.",
  manifest: "/site.webmanifest",
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

/**
 * Dados institucionais, uma vez, no layout.
 *
 * Organization e Person no mesmo grafo, ligadas por founder/worksFor:
 * é isso que permite a um mecanismo generativo entender que "GEIO" e
 * "Daiane Gondim" são a mesma autoridade vista de dois ângulos, em vez
 * de duas entidades soltas com nomes parecidos.
 *
 * `sameAs` aponta para os perfis que corroboram a identidade de forma
 * independente — Lattes e LinkedIn. Corroboração externa é o que
 * distingue entidade reconhecida de texto autodeclarado.
 */
function OrganizacaoJsonLd() {
  const pessoa = {
    "@type": "Person",
    "@id": `${marca.site}/sobre#daiane-gondim`,
    name: "Daiane Gondim",
    alternateName: "Daiane dos Santos Gondim",
    jobTitle: "Arquiteta-Chefe",
    description:
      "Criadora do framework GEIO — Gestão Estrutural da Incompatibilidade Organizacional — " +
      "e responsável técnica pelos instrumentos de diagnóstico estrutural derivados dele.",
    url: `${marca.site}/sobre`,
    image: `${marca.site}/daiane-gondim-720.jpg`,
    email: marca.email,
    worksFor: { "@id": `${marca.site}#organizacao` },
    // Formação verificável. MIT OpenCourseWare é material aberto, não
    // vínculo institucional: fica descrito no texto da página, nunca
    // declarado como alumniOf.
    alumniOf: [
      { "@type": "EducationalOrganization", name: "SENAI-MG" },
      { "@type": "EducationalOrganization", name: "Centro Universitário de Patos de Minas (UNIPAM)" },
    ],
    knowsAbout: [
      "Arquitetura decisória",
      "Planejamento e Controle da Produção",
      "Engenharia de Sistemas",
      "Teoria das Restrições",
      "Carga cognitiva sistêmica",
      "NR-1 e riscos psicossociais",
      "Governança operacional",
      "Incompatibilidade organizacional",
    ],
    sameAs: [marca.linkedin, marca.lattes],
  };

  const organizacao = {
    "@type": "Organization",
    "@id": `${marca.site}#organizacao`,
    name: marca.nome,
    url: marca.site,
    email: marca.email,
    logo: `${marca.site}/icon-512.png`,
    description:
      "Arquitetura operacional para indústrias. Diagnóstico e compatibilização estrutural " +
      "pelo framework GEIO — Gestão Estrutural da Incompatibilidade Organizacional.",
    foundingDate: "2026-04-08",
    founder: { "@id": `${marca.site}/sobre#daiane-gondim` },
    address: { "@type": "PostalAddress", addressLocality: "Patos de Minas", addressRegion: "MG", addressCountry: "BR" },
    areaServed: { "@type": "AdministrativeArea", name: "Patos de Minas e região, Minas Gerais" },
    knowsAbout: [
      "Índice de Incompatibilidade Organizacional (IIO)",
      "Carga Cognitiva Sistêmica (CCS)",
      "Diagnóstico estrutural de operações industriais",
      "Conformidade NR-1 quanto a riscos psicossociais",
    ],
    sameAs: [marca.linkedin, marca.lattes],
  };

  const dados = { "@context": "https://schema.org", "@graph": [organizacao, pessoa] };
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
