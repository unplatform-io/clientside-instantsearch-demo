import type { NextPage } from "next";
import React from "react";
import { Hits, Stats, Pagination } from "react-instantsearch-dom";
import HitComponent from "./HitComponent";

const Content: NextPage = () => {
  return (
    <div className="right-column">
      <div className="info">
        <Stats />
      </div>
      <Hits hitComponent={HitComponent} />
      <div className="pagination">
        <Pagination showLast />
      </div>
    </div>
  );
};

export default Content;
