import "instantsearch.css/themes/satellite.css";
import SearchGrid from "../components/SearchGrid";
import { createIndex, search } from "instantsearch-itemsjs-adapter/lib/adapter";
import { useEffect, useState } from "react";

function Home() {
  type Product = {};

  const [productsState, setProductsState] = useState({});
  var searchClient = {};

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
  }

  searchClient = {
    search: (requests: any) => search(requests),
    searchForFacetValues: () => {
      throw new Error("Not implemented");
    },
  };

  return (
    <>
      <SearchGrid searchClient={searchClient} />
    </>
  );
}

export default Home;
