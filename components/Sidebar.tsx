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
      <h5>Id</h5>
      <RangeInput attribute="id" />
      <h5>Rate</h5>
      <RatingMenu attribute="rate" />
    </div>
  );
}
