import type { NextPage } from "next";
import "instantsearch.css/themes/satellite.css";
import SearchGrid from "../components/SearchGrid";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  createIndex,
  search,
  getSearchClient,
} from "instantsearch-itemsjs-adapter/lib/adapter";
import { useEffect, useState } from "react";

const test = {
  query: "Gold",
};

function Home() {
  type Product = {};

  const [productsState, setProductsState] = useState({});
  var index = {};
  var searchClientTry = {};

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const products: Product[] = await res.json();

      setProductsState(products);
    }

    getProducts();
  }, []);

  if (Object.values(productsState).length > 1) {
    createIndex(productsState);
    // const searchClient = getSearchClient(productsState);
    // console.log(searchClient);
    //   index = createIndex(productsState);
    // }
    // searchClientTry = {
    //   // search: (queries) => (result),
    //   search: (requests: any) => createIndex(productsState),
    //   searchForFacetValues: () => {
    //     throw new Error("Not implemented");
    //   },
    // };
  }

  searchClientTry = {
    search: (requests: any) => search(test),
    searchForFacetValues: () => {
      throw new Error("Not implemented");
    },
  };
  return (
    <>
      <SearchGrid searchClientTry={searchClientTry} productsState={index} />
    </>
  );
}

export default Home;
