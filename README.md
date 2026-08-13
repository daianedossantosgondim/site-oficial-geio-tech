# geio

Ecossistema digital da **GEIO Gestão Inteligente** — site institucional e instrumentos
do framework GEIO (Gestão Estrutural da Incompatibilidade Organizacional).

Arquitetura completa em [`GEIO_MASTER_PLAN.md`](../GEIO_MASTER_PLAN.md).
Identidade visual em [`marca-geio/MANUAL-DE-MARCA.md`](../marca-geio/MANUAL-DE-MARCA.md).

---

## Estrutura

```
geio/
├─ apps/institucional/     geio.tech — Next.js 15, App Router
├─ packages/tokens/        cor, tipo, dados institucionais e do produto
├─ packages/ui/            Primitivos e Compostos
├─ packages/instrumentos/  Calculadora GEIO e Malha Paramétrica
└─ scripts/                verificação de contraste
```

### As cinco camadas

A arquitetura de componentes espelha as cinco camadas do framework, com a mesma
propriedade que interessa: **cada camada só depende da anterior.**

| Camada do framework | Camada de código | Onde |
|---|---|---|
| Filosófica | Tokens | `packages/tokens` |
| Canônica | Primitivos | `packages/ui/primitivos` |
| Metodológica | Compostos | `packages/ui/compostos` |
| Instrumental | Instrumentos | `packages/instrumentos` |
| Aplicada | Rotas | `apps/institucional/app` |

Um Primitivo nunca importa um Composto. Um pacote nunca importa uma rota. A regra é
verificada pelo ESLint, não confiada à disciplina.

---

## Comandos

```bash
npm install          # instala o workspace inteiro
npm run dev          # desenvolvimento em http://localhost:3100
npm run build        # build de produção
npm run verificar    # contraste + testes + tipos + lint
```

### `npm run verificar`

Roda as quatro barreiras locais, na mesma ordem do CI:

1. **`npm run contraste`** — recalcula por luminância relativa todos os pares de cor
   declarados e falha se algum cair abaixo do mínimo WCAG. Também confere que
   `tokens.css` e o espelho tipado não divergiram.
2. **`npm run teste`** — 17 casos sobre o núcleo da Calculadora: parsing pt-BR, tetos,
   concordância verbal, determinismo da malha.
3. **`npm run tipos`** — `tsc --noEmit`.
4. **`npm run lint`** — inclui a regra de dependência entre camadas.

O CI acrescenta Lighthouse com orçamento travado e `axe-core` contra as dez rotas.

---

## Decisões que não são preferência

**Zero webfont.** Pilhas de sistema. Zero requisição, zero FOUT, CLS de fonte igual a
zero. Está no manual de marca §3.

**O cálculo não sai do navegador.** A Calculadora GEIO é aritmética local. Isso não é
otimização: `/privacidade` §03 afirma por escrito que os valores não são enviados a
servidor nenhum. Mover o cálculo para a borda exige **alterar o documento legal antes**.

**Sem formulário de captura.** `/privacidade` §02 também afirma isso. Adicionar um
formulário sem atualizar a política coloca o site em contradição com documento publicado.

**Cobalto é cor de preenchimento.** `#1A3AFF` mede 2,92:1 sobre o fundo e reprova como
texto. Para letra e contorno de foco existe `--cobalto-legivel` (`#5B7BFF`, 5,39:1). O
script de contraste impede a promoção acidental.

**Um cabeçalho, um rodapé.** Antes desta migração existiam nove cópias de cada um em
arquivos HTML soltos, e toda mudança institucional era multiplicada por nove.

---

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Hub: calculadora, passivo invisível, definição, esteira, perfis |
| `/metodologia` | Cinco camadas, sete invariáveis, IIO e CCS |
| `/diagnostico-preliminar-parametrico` | Produto — etapa 1 |
| `/varredura-in-company` | Serviço — etapa 2 |
| `/implantacao-e-integracao` | Serviço — etapa 3 |
| `/sobre` | Custódia e registro institucional |
| `/faq` | Perguntas sobre framework e produto |
| `/transparencia` | Centro de transparência LGPD |
| `/termos` · `/privacidade` | Documentos legais |

`sitemap.xml` e `robots.txt` são gerados por código — não existe versão escrita à mão
para divergir.
