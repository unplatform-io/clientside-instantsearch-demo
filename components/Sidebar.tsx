import React from "react";
import {
  CurrentRefinements,
  MenuSelect,
  RefinementList,
  RangeInput,
  HitsPerPage,
} from "react-instantsearch-dom";

export default function Sidebar() {
  return (
    <div className="left-column">
      <div>
        <CurrentRefinements />
        <HitsPerPage
          items={[
            { value: 5, label: "Show 5 hits" },
            { value: 10, label: "Show 10 hits" },
            { value: 15, label: "Show 15 hits" },
            { value: 20, label: "Show 20 hits" },
          ]}
          defaultRefinement={10}
        />
      </div>
      <div>
        <h5>Category</h5>
        <RefinementList attribute="category"></RefinementList>
        <h5>Color</h5>
        <MenuSelect attribute="color"></MenuSelect>
        <h5>Price</h5>
        <RangeInput attribute="price" />
        <h5>Id</h5>
        <RangeInput attribute="id" />
      </div>
    </div>
  );
}
