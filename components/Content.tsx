import React from "react";
import { Hits, Stats, Pagination } from "react-instantsearch-dom";
import HitComponent from "./HitComponent";

function Content() {
  return (
    <div className="right-column">
      <div className="info">
        <br />
        <Stats />
        <br />
      </div>
      <Hits hitComponent={HitComponent} />
      <div className="pagination">
        <Pagination showLast />
      </div>
    </div>
  );
}

export default Content;
