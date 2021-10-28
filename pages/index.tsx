import "instantsearch.css/themes/satellite.css";
import SearchGrid from "../components/SearchGrid";
import { createIndex, search } from "instantsearch-itemsjs-adapter/lib/adapter";
import { useEffect, useState } from "react";
import { MultipleQueriesQuery } from "@algolia/client-search";
import products from "../public/products.json";

function Home() {
  const [productsState, setProductsState] = useState({});

  useEffect(() => {
    setProductsState(products);
  }, []);

  if (Object.values(productsState).length > 1) {
    createIndex(productsState);
  }

  var searchClient = {
    search: (queries: MultipleQueriesQuery[]) => search(queries),
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
