# Clientside Instantsearch Demo

<img src="https://github.com/unplatform-io/instantsearch-itemsjs-adapter/blob/main/logo-orange.svg" alt="Instantsearch-ItemsJS-adapter" align="right" width="20%" />

## Introduction Instantsearch-ItemsJS-adapter

Instantsearch (build by Algolia) is an open-source, production-ready UI library that lets you quickly build a search interface in your front-end application. You can quickly perform searches on your website, in combination with an Algolia back-end (pay per search).

However, there are other options offering a suitable back-end solution. Definitely for a new business with a small catalog. For instance, with the [Instantsearch-ItemsJS-adapter](https://www.npmjs.com/package/instantsearch-itemsjs-adapter) NPM-package. This package has a lot of features and can be easily implemented in your frond-end application. Another benefit is not having to think about the costs.

Furthermore, the use of a search service with a lot of functions is not necessary very often. Certainly not for an online store with a limited number of products. And if necessary, users can simply switch from this adapter to Algolia, because it supports the same front-end (Instantsearch).

This demo shows how Instantsearch can be used with ItemsJS using the Instantsearch-ItemsJS-adapter NPM-package. This package connects Instantsearch to ItemsJS and ItemsJS will perform a client side based search for your website. Almost all features of Instantsearch are supported with this adapter. A List of features with extra Information can be found in the [adapter package readme](https://github.com/unplatform-io/instantsearch-itemsjs-adapter#readme).

## Use application

Go to [this link](https://clientside-instantsearch-demo.vercel.app/) to see the demo in action.
<img src="https://github.com/unplatform-io/clientside-instantsearch-demo/blob/main/demo.gif" alt="Demo" width="80%" />

### Run on localhost

After cloning this GitHub repository, run the following commands to start the application on your localhost.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contribute

Help to this project is appreciated. If you want to help please use Cypress and ESlint mentioned below, before creating a pull request.

### [Cypress](https://www.cypress.io/)

To check the frond-end functionalities run Cypress tests, and if you make changes to the front-end also write some tests for this code.

```bash
npm run test
```

### [ESlint](https://eslint.org/)

To keep the code clean run ESlint and resolve the errors when you're done programming.

```bash
npm run lint
```

To automaticly resolve the errors run:

```bash
npm run lint -- --fix
```
