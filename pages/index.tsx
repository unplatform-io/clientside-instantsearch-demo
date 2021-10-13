import type { NextPage } from 'next'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination, Stats } from 'react-instantsearch-dom';
import 'instantsearch.css/themes/satellite.css';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

// Our free 10k request api 
// const searchClient = algoliasearch(
//   'CLWMSJB3R2',
//   'e132842fcf9934fd5c42e11f7eb6a810'
// );
// indexName: demo_products

// Algolia free test api
const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const Home: NextPage = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="instant_search" 
    >
      <header className="header">
        <SearchBox translations={{placeholder: "Search for products"}} />
      </header>

      <main>
        <Sidebar />
        <Content />
      </main>

    </InstantSearch>
)
}

export default Home
