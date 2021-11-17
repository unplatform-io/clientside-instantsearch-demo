import { connectStateResults } from "react-instantsearch-dom";

const StateResults = ({ searchResults }: any) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;

  return (
    <div>
      <div hidden={hasResults}>No results found...</div>
    </div>
  );
};

export const CustomStateResults = connectStateResults(StateResults);
