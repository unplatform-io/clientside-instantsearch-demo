# Clientside Instantsearch Demo

<img src="https://github.com/unplatform-io/instantsearch-itemsjs-adapter/blob/main/logo-orange.svg" alt="Instantsearch-ItemsJS-adapter" align="right" width="20%" />

## Introduction Instantsearch-ItemsJS-adapter 

This demo connects Instantsearch to a ItemsJS based search back-end, using the [Instantsearch-ItemsJS-adapter](https://github.com/unplatform-io/instantsearch-itemsjs-adapter) package. This package will preform a client side based search supporting text and facet filters as well as a lot of other great features which can be found in the [adaper package readme](https://github.com/unplatform-io/instantsearch-itemsjs-adapter#readme).

## Use application
Go to [this link](https://clientside-instantsearch-demo.vercel.app/) to see the demo in action.

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
