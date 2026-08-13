import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const configuracao = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // next-env.d.ts e gerado pelo Next a cada build: nao e codigo nosso
    // e usa triple-slash reference por decisao do framework.
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  {
    rules: {
      // Regra de dependência entre camadas (GEIO_MASTER_PLAN §2):
      // uma camada só importa da anterior. Rota nunca é importada por
      // pacote; Primitivo nunca importa Composto.
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/app/**"],
              message:
                "Camada Aplicada não pode ser importada por pacote. Ver GEIO_MASTER_PLAN.md §2.",
            },
          ],
        },
      ],
    },
  },
];

export default configuracao;
