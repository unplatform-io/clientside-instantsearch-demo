import React from "react";
import {
  CurrentRefinements,
  MenuSelect,
  RefinementList,
  RangeInput,
  HitsPerPage,
  SortBy,
  RatingMenu,
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
        <SortBy
          defaultRefinement="rate_desc"
          items={[
            { value: "price_desc", label: "Price, high to low" },
            { value: "price_asc", label: "Price, low to high" },
            { value: "rate_desc", label: "Rating, high to low" },
            { value: "rate_asc", label: "Rating, low to high" },
          ]}
        />
      </div>
      <div>
        <h5>Category</h5>
        <RefinementList attribute="category"></RefinementList>
        <h5>Color</h5>
        <MenuSelect attribute="color"></MenuSelect>
        <h5>Price</h5>
        <RangeInput min={1} max={1000} attribute="price" />
        <RatingMenu min={1} max={5} attribute="rate" />
      </div>
    </div>
  );
}
