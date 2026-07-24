# CI/CD Demo

Projeto criado para praticar Integração Contínua (CI) e Entrega Contínua (CD) com GitHub Actions, aplicando os conceitos de lint, testes automatizados, build e deploy automatizado.

## 🔗 Deploy

Aplicação publicada na Vercel: **[https://ci-cd-demo-beige.vercel.app/](https://ci-cd-demo-beige.vercel.app/)**

## 🚀 Stack

- [Next.js](https://nextjs.org/) (App Router + TypeScript)
- [ESLint](https://eslint.org/) para validação de código
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) para testes unitários
- [Vercel](https://vercel.com/) para hospedagem e deploy

## ⚙️ Pipeline de CI/CD

O workflow está em `.github/workflows/main.yml` e roda em todo push ou pull request para a branch `main`:

1. **CI — Lint, Test e Build**
   - Instala as dependências (`npm ci`)
   - Roda o lint (`npm run lint`)
   - Roda os testes (`npm run test`)
   - Verifica se o build compila (`npm run build`)

2. **CD — Deploy (Vercel)**
   - Executa apenas em push direto na `main`, e somente se o job de CI passar
   - Usa a Vercel CLI (`vercel pull` → `vercel build` → `vercel deploy --prebuilt`) autenticada via secret `VERCEL_TOKEN`

## 🧪 Rodando localmente

```bash
npm install
npm run lint
npm run test
npm run build
npm run dev
```
