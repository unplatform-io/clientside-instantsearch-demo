import { RangeInput } from "react-instantsearch-dom";

export default function Sidebar() {
  return (
    <div className="left-column">
      <h5>Price</h5>
      <RangeInput attribute="price" />
      <h5>Id</h5>
      <RangeInput attribute="id" />
    </div>
  );
}
