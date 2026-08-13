import type { NextConfig } from "next";

/**
 * Cabeçalhos de segurança aplicados na borda.
 *
 * Sobre 'unsafe-inline' em script-src — verificado em navegador, não
 * suposto: o Next.js App Router emite <script> inline com o payload
 * de hidratação (self.__next_f.push). Com "script-src 'self'" puro o
 * navegador bloqueia esses blocos e o React nunca hidrata — a
 * Calculadora GEIO simplesmente não funciona.
 *
 * As saídas possíveis são duas, e nenhuma é grátis:
 *
 *   a) CSP por nonce. Exige gerar um nonce por requisição, o que só
 *      é possível em middleware, o que opta TODAS as rotas para
 *      renderização dinâmica — perdendo a geração estática das 13
 *      rotas e a garantia de que o site continua no ar mesmo se toda
 *      função falhar.
 *   b) 'unsafe-inline' em script-src, mantendo tudo estático.
 *
 * Adotado (b), com compensação: default-src 'none' nega todo o resto,
 * connect-src impede exfiltração para terceiro, base-uri e
 * frame-ancestors fecham as duas vias clássicas de sequestro, e o
 * site não tem campo que persista nem API que aceite entrada. A
 * decisão está registrada em GEIO_MASTER_PLAN.md §12.
 */
const csp = [
  "default-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "manifest-src 'self'",
  "connect-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'none'",
  "upgrade-insecure-requests",
].join("; ");

const cabecalhos = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ["@geio/ui", "@geio/instrumentos", "@geio/tokens"],
  async headers() {
    return [{ source: "/:caminho*", headers: cabecalhos }];
  },
  async redirects() {
    // Rotas do site estático anterior. Mantidas para não quebrar
    // link já publicado em material comercial.
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/diagnostico-preliminar-parametrico.html", destination: "/diagnostico-preliminar-parametrico", permanent: true },
      { source: "/varredura-in-company.html", destination: "/varredura-in-company", permanent: true },
      { source: "/implantacao-e-integracao.html", destination: "/implantacao-e-integracao", permanent: true },
      { source: "/metodologia.html", destination: "/metodologia", permanent: true },
      { source: "/sobre.html", destination: "/sobre", permanent: true },
      { source: "/faq.html", destination: "/faq", permanent: true },
      { source: "/termos.html", destination: "/termos", permanent: true },
      { source: "/privacidade.html", destination: "/privacidade", permanent: true },
    ];
  },
};

export default nextConfig;
