import React, { Component } from "react";
import {
  InstantSearch,
  SearchBox,
  connectStateResults,
  VoiceSearch,
  ScrollTo,
  PoweredBy,
  Breadcrumb,
} from "react-instantsearch-dom";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import algoliasearch from "algoliasearch/lite";

const algolia = algoliasearch(
  process.env.NEXT_PUBLIC_API_NAME2!,
  process.env.NEXT_PUBLIC_API_KEY2!
);

const SearchErrorCatcher = connectStateResults(
  class SearchErrorCatcher extends Component {
    error = null;

    componentDidUpdate(nextProps: any) {
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
      <InstantSearch searchClient={searchClient} indexName="instant_search">
        <SearchErrorCatcher />
        <header className="header">
          <div>
            <ScrollTo>
              <SearchBox
                translations={{ placeholder: "Search for products" }}
              />
            </ScrollTo>
            <VoiceSearch />
            <Breadcrumb
              attributes={[
                "category.lvl0",
                "category.lvl1",
                "category.lvl2",
                "category.lvl3",
              ]}
            />
          </div>
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
