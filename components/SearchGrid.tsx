import type { NextPage } from "next";
import React from "react";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import algoliasearch from "algoliasearch/lite";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

interface Props {
  products: object;
}

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_API_NAME!,
  process.env.NEXT_PUBLIC_API_KEY!
);

function SearchGrid({ products }: Props) {
  console.log(products);
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.NEXT_PUBLIC_API_INDEXNAME!}
    >
      <header className="header">
        <SearchBox translations={{ placeholder: "Search for products" }} />
      </header>

      <main>
        <Sidebar />
        <Content />
      </main>
    </InstantSearch>
  );
}

export default SearchGrid;
