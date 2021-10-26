import type { NextPage } from "next";
import React from "react";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import algoliasearch from "algoliasearch/lite";
import HitComponent from "../components/HitComponent";

const agolia = algoliasearch(
  process.env.NEXT_PUBLIC_API_NAME!,
  process.env.NEXT_PUBLIC_API_KEY!
);

function SearchGrid({ searchClient }: any) {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={"products"}>
        {console.log("searchgrid")}
        <header className="header">
          <SearchBox translations={{ placeholder: "Search for products" }} />
        </header>

        <Hits hitComponent={HitComponent} />
        <main>
          <Sidebar />
          <Content />
        </main>
      </InstantSearch>
    </>
  );
}

export default SearchGrid;
