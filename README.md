# Clientside Instantsearch Demo

<img src="https://github.com/unplatform-io/instantsearch-itemsjs-adapter/blob/main/logo-orange.svg" alt="Instantsearch-ItemsJS-adapter" align="right" width="20%" />

## Introduction Instantsearch-ItemsJS-adapter

Instantsearch (build by Algolia) is an open-source, production-ready UI library that lets you quickly build a search interface in your front-end application. In combination with an (paid) Algolia backend, you can quickly perform searches on your website.

However, There are other options that also offer a suitable solution for a new business with a small catalog. Performance is less important for such a business, and not all features are necessary. Also, a paid service can be high in costs. That are some of the reasons the [Instantsearch-ItemsJS-adapter](https://www.npmjs.com/package/instantsearch-itemsjs-adapter) NPM-package has been build. It can be easily implemented and because of using the same front-end, users can simply upgrade from this adapter to Algolia.

This demo shows how Instantsearch can be used with ItemsJS using the Instantsearch-ItemsJS-adapter NPM-package. This package connects Instantsearch to ItemsJS and ItemsJS will perform a client side based search for your website. Almost all features of Instantsearch will work with the adapter. Information about these features can be found in the [adapter package readme](https://github.com/unplatform-io/instantsearch-itemsjs-adapter#readme).

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
