import { RefinementList } from "react-instantsearch-dom";

function Sidebar() {
  return (
    <div className="left-column">
      <h5>Brand</h5>
      <RefinementList attribute="brand" />
    </div>
  );
}

export default Sidebar;
