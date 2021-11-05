import "instantsearch.css/themes/satellite.css";
import SearchGrid from "../components/SearchGrid";
import {
  getSearchClient,
  createIndex,
} from "instantsearch-itemsjs-adapter/lib/adapter";
import data from "../public/products.json";

const options = {
  searchableFields: ["title"],
  query: "",
  aggregations: {
    category: {
      title: "category",
      size: 10,
      conjunction: false,
    },
  },
};

createIndex(data, options);
const searchClient = getSearchClient();

function Home() {
  return (
    <>
      <SearchGrid searchClient={searchClient} />
    </>
  );
}

export default Home;
