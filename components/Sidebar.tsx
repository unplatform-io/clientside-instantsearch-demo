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
      </div>
      <div>
        <h5>Category</h5>
        <RefinementList attribute="category"></RefinementList>
        <br />
        <h5>Color</h5>
        <MenuSelect attribute="color"></MenuSelect>
        <br />
        {/* <h5>Price</h5>
        <RangeInput attribute="price" /> */}
        <br />
        <h5>Id</h5>
        <RangeInput attribute="id" />
        <br />
        <h5>ToggleRefinement</h5>
        <ToggleRefinement
          attribute={"inStock"}
          label={"In Stock"}
          value={true}
        />
        <br />
        <h5>NumericMenu</h5>
        <NumericMenu
          attribute="price"
          items={[
            { label: "Kleiner dan €10", end: 10 },
            { label: "Tussen €10 en €100", start: 10, end: 100 },
            { label: "Tussen €100 en €500", start: 100, end: 500 },
            { label: "Grote dan €500", start: 500 },
          ]}
        />

        <CustomRangeSlider attribute="price" />
      </div>
    </div>
  );
}
