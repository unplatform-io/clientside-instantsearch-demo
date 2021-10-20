# Clientside InstantSearch Demo
## Introduction

This Instantsearch based application demonstrates how to perform client-side only search using itemsjs. It uses [unplatform-io/clientside-instantsearch-itemsjs-adapter](https://github.com/unplatform-io/instantsearch-itemsjs-adapter) to connect Instantsearch to itemsjs.

## Getting Started

To start the project run the following commands

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## [Cypress](https://www.cypress.io/)

Before running the E2E tests
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

## [ESlint](https://eslint.org/)

To run ESlint
```bash
npm run lint
```
