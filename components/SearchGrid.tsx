import type { NextPage } from "next";
import React from "react";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
// import algoliasearch from "algoliasearch/lite";

interface Props {
  productsState: object;
  searchClientTry: object;
}

// const searchClient = algoliasearch(
//   process.env.NEXT_PUBLIC_API_NAME!,
//   process.env.NEXT_PUBLIC_API_KEY!
// );

function SearchGrid({ searchClientTry, productsState }: Props) {
  return (
    <>
      {console.log("serachgrit seachclienttry", searchClientTry)}
      <InstantSearch searchClient={searchClientTry} indexName={"products"}>
        <header className="header">
          <SearchBox translations={{ placeholder: "Search for products" }} />
        </header>

        <main>
          <Sidebar />
          <Content />
        </main>
      </InstantSearch>
    </>
  );
}

export default SearchGrid;
