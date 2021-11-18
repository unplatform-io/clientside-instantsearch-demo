import React from "react";
import {
  CurrentRefinements,
  MenuSelect,
  RefinementList,
  RangeInput,
  HitsPerPage,
  ClearRefinements,
  ToggleRefinement,
  NumericMenu,
  RatingMenu,
  SortBy,
} from "react-instantsearch-dom";

import { CustomRangeSlider } from "./connectRangeSlider";

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
        <SortBy
          defaultRefinement=""
          items={[
            { value: "price_desc", label: "Price, high to low" },
            { value: "price_asc", label: "Price, low to high" },
            { value: "rating.rate_desc", label: "Rating, high to low" },
            { value: "rating.rate_asc", label: "Rating, low to high" },
          ]}
        />
      </div>
      <div>
        <br />
        <br />
        <h4>Category</h4>
        <RefinementList attribute="category"></RefinementList>
        <br />
        <h4>Color</h4>
        <MenuSelect attribute="color"></MenuSelect>
        <br />
        <h4>Price</h4>
        <CustomRangeSlider attribute="price" />
        <br />
        <br />
        <h4>deliveryTime</h4>
        <RangeInput attribute="deliveryTime" />
        <br />
        <ToggleRefinement
          attribute={"inStock"}
          label={<h4>In Stock</h4>}
          value={true}
        />
        <h4>Rating</h4>
        <RatingMenu attribute={"rating"} />
        <br />
        <h4>Amount of Reviews</h4>
        <NumericMenu
          attribute="reviews"
          items={[
            { label: "less than 10", end: 10 },
            { label: "10 till 25", start: 10, end: 25 },
            { label: "25 till 50", start: 25, end: 50 },
            { label: "More than 50", start: 50 },
          ]}
        />
      </div>
    </div>
  );
}
