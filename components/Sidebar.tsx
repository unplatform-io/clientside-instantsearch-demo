import React from "react";
import {
  CurrentRefinements,
  MenuSelect,
  RefinementList,
} from "react-instantsearch-dom";

export default function Sidebar() {
  return (
    <div className="left-column">
      <div>
        <h5>Selected</h5>
        <CurrentRefinements />
      </div>
      <div>
        <h5>Category</h5>
        <RefinementList attribute="category"></RefinementList>
        <h5>Color</h5>
        <MenuSelect attribute="color"></MenuSelect>
      </div>
    </div>
  );
}
