import type { NextPage } from "next";
import React from "react";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import algoliasearch from "algoliasearch/lite";
import HitComponent from "../components/HitComponent";

interface Props {
  searchClient: any;
}

const agolia = algoliasearch(
  process.env.NEXT_PUBLIC_API_NAME!,
  process.env.NEXT_PUBLIC_API_KEY!
);

function SearchGrid({ searchClient }: Props) {
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

// {
//   "results": [
//       {
//           "hits": [
//               {
//                   "name": "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
//                   "description": "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
//                   "categories": [
//                       "TV & Home Theater",
//                       "Streaming Media Players"
//                   ],
//                   "hierarchicalCategories": {
//                       "lvl0": "TV & Home Theater",
//                       "lvl1": "TV & Home Theater > Streaming Media Players"
//                   },
//                   "type": "Streaming media plyr",
//                   "price": 39.99,
//                   "price_range": "1 - 50",
//                   "image": "https://cdn-demo.algolia.com/bestbuy-0118/5477500_sb.jpg",
//                   "url": "https://api.bestbuy.com/click/-/5477500/pdp",
//                   "free_shipping": false,
//                   "popularity": 21469,
//                   "objectID": "5477500",
//                   "_snippetResult": {
//                       "description": {
//                           "value": "Enjoy smart access to videos, games and apps with this",
//                           "matchLevel": "none"
//                       }
//                   },
//                   "_highlightResult": {
//                       "name": {
//                           "value": "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
//                           "matchLevel": "none",
//                           "matchedWords": []
//                       },
//                       "description": {
//                           "value": "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
//                           "matchLevel": "none",
//                           "matchedWords": []
//                       },
//                       "categories": [
//                           {
//                               "value": "TV & Home Theater",
//                               "matchLevel": "none",
//                               "matchedWords": []
//                           },
//                           {
//                               "value": "Streaming Media Players",
//                               "matchLevel": "none",
//                               "matchedWords": []
//                           }
//                       ]
//                   }
//               },
//           ],
//           "nbHits": 21469,
//           "page": 0,
//           "nbPages": 50,
//           "hitsPerPage": 20,
//           "facets": {},
//           "exhaustiveFacetsCount": true,
//           "exhaustiveNbHits": true,
//           "exhaustiveTypo": true,
//           "query": "",
//           "queryAfterRemoval": "",
//           "params": "highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&query=&maxValuesPerFacet=10&page=0&facets=%5B%22category%22%5D&tagFilters=",
//           "index": "instant_search",
//           "renderingContent": {
//               "facetOrdering": {
//                   "facets": {
//                       "order": [
//                           "brand",
//                           "hierarchicalCategories.lvl0",
//                           "categories"
//                       ]
//                   },
//                   "values": {
//                       "brand": {
//                           "sortRemainingBy": "count"
//                       },
//                       "hierarchicalCategories.lvl0": {
//                           "sortRemainingBy": "count"
//                       }
//                   }
//               }
//           },
//           "processingTimeMS": 2
//       }
//   ]
// }
