## Getting Started

To start the project run the following commands

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Run E2E tests with [Cypress](https://www.cypress.io/)

Before running Cypress
```bash
npm run build
npm start
```

With the Cypress GUI
```bash
npm run test
```

Without the Cypress GUI via CLI
```bash
npm run test:headless
```

## [ESlint](https://eslint.org/) with [Prettier](https://prettier.io/)

To run ESlint with Prettier
```bash
npm run lint
```

Fix Eslint & Prettier formatted error
```bash
npm run lint -- --fix
```
