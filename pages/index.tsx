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
    price: {
      show_facet_stats: true,
    },
    inStock: {},
    reviews: {
      show_facet_stats: true,
    },
    rating: {
      show_facet_stats: true,
    },
    deliveryTime: {
      show_facet_stats: true,
    },
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
    "rating.rate_asc": {
      field: "rating.rate",
      order: "asc",
    },
    "rating.rate_desc": {
      field: "rating.rate",
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
