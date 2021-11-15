import React from "react";
import { InfiniteHits, Stats, Pagination } from "react-instantsearch-dom";
import HitComponent from "./HitComponent";

function Content() {
  return (
    <div className="right-column">
      <div className="info">
        <br />
        <Stats />
        <br />
      </div>

      <InfiniteHits hitComponent={HitComponent} />

      <div className="pagination">
        <Pagination showLast />
      </div>
    </div>
  );
}

export default Content;
