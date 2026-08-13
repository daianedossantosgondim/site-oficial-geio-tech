import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [".next/**", "node_modules/**"],
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
