import { NextPage } from "next";
import {
  RangeInput,
  RatingMenu,
  RefinementList,
} from "react-instantsearch-dom";

export default function Sidebar() {
  return (
    <div className="left-column">
      <h5>Brand</h5>
      <RefinementList attribute="brand" />
      <h5>Price</h5>
      <RangeInput attribute="price" />
      <h5>id</h5>
      <RangeInput attribute="id" />
    </div>
  );
}
