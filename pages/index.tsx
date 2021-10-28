import "instantsearch.css/themes/satellite.css";
import SearchGrid from "../components/SearchGrid";
import getSearchClient from "instantsearch-itemsjs-adapter/lib/adapter";
import data from "../public/products.json";

const options = {
  searchableFields: ["title"],
};

const searchClient = getSearchClient(data, options);

function Home() {
  return (
    <>
      <SearchGrid searchClient={searchClient} />
    </>
  );
}

export default Home;
