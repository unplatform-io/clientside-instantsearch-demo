import type { NextPage } from "next";
import React, { Component } from "react";
import {
  connectStateResults,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-dom";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import algoliasearch from "algoliasearch/lite";
import HitComponent from "../components/HitComponent";

const algolia = algoliasearch(
  process.env.NEXT_PUBLIC_API_NAME!,
  process.env.NEXT_PUBLIC_API_KEY!
);

const SearchErrorCatcher = connectStateResults(
  class SearchErrorCatcher extends Component {
    error = null;
    componentWillReceiveProps(nextProps: any) {
      if (this.error && !nextProps.error) {
        this.error = null;
      }
      if (!this.error && nextProps.error) {
        // only throw on new errors
        throw nextProps.error;
      }
    }
    render() {
      return null;
    }
  }
);

function SearchGrid({ searchClient }: any) {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={"instant_search"}>
        <SearchErrorCatcher />
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
