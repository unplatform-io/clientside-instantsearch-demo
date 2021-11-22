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
  Panel,
} from "react-instantsearch-dom";

import { CustomRangeSlider } from "./connectRangeSlider";

export default function Sidebar() {
  return (
    <div className="left-column">
      <div>
        <Panel header="Refinements">
          <CurrentRefinements />
          <ClearRefinements />
        </Panel>
        <br />
        <Panel header="Hits display">
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
        </Panel>
      </div>
      <div>
        <Panel header="Category">
          <RefinementList attribute="category"></RefinementList>
        </Panel>
        <br />
        <Panel header="Color">
          <MenuSelect attribute="color"></MenuSelect>
        </Panel>
        <Panel header="Price">
          <CustomRangeSlider attribute="price" />
          <br />
          <br />
        </Panel>
        <h4></h4>
        <Panel header="delivery Time">
          <RangeInput attribute="deliveryTime" />
        </Panel>
        <Panel header="In stock">
          <ToggleRefinement attribute={"inStock"} value={true} />
        </Panel>
        <Panel header="Rating">
          <RatingMenu
            attribute={"rating"}
            translations={{
              ratingLabel: "and more",
            }}
          />
        </Panel>
        <Panel header="Amount of reviews">
          <NumericMenu
            attribute="reviews"
            items={[
              { label: "less than 10", end: 10 },
              { label: "10 till 25", start: 10, end: 25 },
              { label: "25 till 50", start: 25, end: 50 },
              { label: "More than 50", start: 50 },
            ]}
          />
        </Panel>
      </div>
    </div>
  );
}
