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
    color: {
      title: "color",
      size: 10,
      conjunction: false,
    },
    rate: {
      title: "rate",
    },
    price: {}, //required to get correct response from adapter
  },
  sortings: {
    price_asc: {
      field: "price",
      order: "asc",
    },
    price_desc: {
      field: "price",
      order: "desc",
    },
    "rate_asc": {
      field: "rate",
      order: "asc",
    },
    "rate_desc": {
      field: "rate",
      order: "desc",
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
