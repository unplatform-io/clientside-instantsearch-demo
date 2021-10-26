import "instantsearch.css/themes/satellite.css";
import SearchGrid from "../components/SearchGrid";
import { createIndex, search } from "instantsearch-itemsjs-adapter/lib/adapter";
import { useEffect, useState } from "react";

function Home() {
  type Product = {};
  var searchClient = {};
  const [productsState, setProductsState] = useState({});

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

interface MultipleQueriesQuery {
  type: "facet";
  facet: string;

  params?: SharedMultipleQueriesQuery["params"];
}

interface SharedMultipleQueriesQuery {
  indexName: string;
  params?: SearchOptions;
}

interface SearchOptions {
  query?: string;
  tagFilters?: string | string[] | ReadonlyArray<string[]>;
  page?: number;
  highlightPreTag?: string;
  highlightPostTag?: string;
  facets?: string[];
  maxValuesPerFacet?: number;
}
