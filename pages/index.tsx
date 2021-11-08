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
    brand: {
      title: "Brand",
      size: 10,
    },
    price: {
      title: "Price",
    },
    id: {
      title: "Id",
    },
    rate: {
      title: "Rate",
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
