import { NextPage } from "next";
import { RefinementList } from "react-instantsearch-dom";

export default function Sidebar() {
  return (
    <div className="left-column">
      <h5>Category</h5>
      <RefinementList attribute="category"></RefinementList>
    </div>
  );
}
