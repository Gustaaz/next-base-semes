import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          "printWidth": 80,
          "tabWidth": 2,
          "singleQuote": true,
          "trailingComma": "all",
          "arrowParens": "always",
          "semi": false
        }
      ],
      semi: ["error", "never"], // Não exige ponto e vírgula
      quotes: ["error", "single"], // Usa aspas simples
      "no-console": "off", // Permite console.log
      "no-unused-vars": "warn", // Aviso para variáveis não utilizadas
      indent: ["error", 2], // Configura indentação para 2 espaços
      "max-len": [
        "error",
        {
          "code": 80, // Máximo de 80 caracteres por linha
          "ignoreUrls": true, // Ignora URLs
          "ignoreStrings": true, // Ignora strings longas
          "ignoreTemplateLiterals": true // Ignora templates literais
        }
      ],
      "no-trailing-spaces": ["error"], // Não permite espaços no final das linhas
      "comma-spacing": ["error", { "before": false, "after": true }] // Espaço após vírgulas
    }
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
