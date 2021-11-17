import React from "react";
import {
  Hits,
  Stats,
  Pagination,
  ExperimentalConfigureRelatedItems,
} from "react-instantsearch-dom";

import { CustomStateResults } from "./connectStateResults";
import HitComponent from "./HitComponent";

// const hit = {
//   objectID: "1234",
//   title: "Fjallraven",
//   category: "men's clothing",
// };

function Content() {
  return (
    <div className="right-column">
      <div className="info">
        <br />
        <Stats />
        <br />
      </div>

      <Hits hitComponent={HitComponent} />

      <CustomStateResults />

      <div className="pagination">
        <Pagination showLast />
      </div>
    </div>
  );
}

export default Content;
