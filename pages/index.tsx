import type { NextPage } from "next";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats,
} from "react-instantsearch-dom";
import "instantsearch.css/themes/satellite.css";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_API_NAME!,
  process.env.NEXT_PUBLIC_API_KEY!
);

const Home: NextPage = () => {
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
};

export default Home;
