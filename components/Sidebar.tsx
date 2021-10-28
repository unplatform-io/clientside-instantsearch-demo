import { NextPage } from "next";
import { RefinementList } from "react-instantsearch-dom";

export default function Sidebar() {
  return (
    <div className="left-column">
      <h5>Brand</h5>
      <RefinementList searchable={true} attribute="category" />
    </div>
  );
}
