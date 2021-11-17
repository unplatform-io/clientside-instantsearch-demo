import React from "react";
import {
  CurrentRefinements,
  MenuSelect,
  RefinementList,
  RangeInput,
  HitsPerPage,
  ClearRefinements,
  ToggleRefinement,
  RatingMenu,
} from "react-instantsearch-dom";

export default function Sidebar() {
  return (
    <div className="left-column">
      <div>
        <CurrentRefinements />
        <ClearRefinements />
        <br />
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
        <br />
        <h5>Color</h5>
        <MenuSelect attribute="color"></MenuSelect>
        <br />
        <h5>Price</h5>
        <RangeInput attribute="price" />
        <br />
        <h5>Id</h5>
        <RangeInput attribute="id" />
        <br />
        <ToggleRefinement
          attribute={"inStock"}
          label={"In Stock"}
          value={true}
        />
      </div>
    </div>
  );
}
