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

  // interface Hit {
  //   readonly objectID: string;
  // }

  // interface SearchResponse<TObject = {}> {
  //   hits: Array<Hit>;
  //   page: number;
  //   nbHits: number;
  //   nbPages: number;
  //   hitsPerPage: number;
  //   processingTimeMS: number;
  //   exhaustiveNbHits: boolean;
  //   query: string;
  //   params: string;
  // }

  // interface MultipleQueriesResponse<TObject> {
  //   /**
  //    * The list of results.
  //    */
  //   results: Array<SearchResponse<TObject>>;
  // }

  // interface SearchClient {
  //   search: <TObject>(queries: ) => MultipleQueriesResponse<TObject>;
  //   searchForFacetValues: () => undefined;
  // }

  // // var searchClient = {};
  // var searchClient: SearchClient = {
  //   search: (queries) => search(queries),
  //   searchForFacetValues: () => {
  //     throw new Error("Not implemented");
  //   },
  // };

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
