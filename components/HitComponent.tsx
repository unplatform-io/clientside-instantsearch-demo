import React from "react";
import { Hit } from "react-instantsearch-core";

type Props = {
  name: string;
};

type HitComponentProps = {
  hit: Hit<Props>;
};

function HitComponent({ hit }: HitComponentProps) {
  console.log("hit", hit);
  return (
    <div className="hit">
      <h1>{hit.name}</h1>
    </div>
  );
}

export default HitComponent;
