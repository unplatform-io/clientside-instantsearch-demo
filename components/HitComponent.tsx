import React from "react";
import { Hit } from "react-instantsearch-core";
import Image from "next/image";
import { Snippet } from "react-instantsearch-dom";

type Props = {
  id: number;
  name: string;
  image: string;
  price: number;
  title: string;
  description: string;
  category: string;
  color: string;
  rating: number;
  deliveryTime: number;
  inStock: boolean;
};

type HitComponentProps = {
  hit: Hit<Props>;
};

function HitComponent({ hit }: HitComponentProps) {
  return (
    <>
      <div className="hit">
        <div className="hit-image">
          <Image
            alt=""
            title=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src={hit.image}
          />
        </div>
        <div className="hit-content">
          <div className="hit-price">&euro; {hit.price}</div>
          <div className="hit-name">
            <b>{hit.title}</b>
          </div>
          <div className="hit-description">
            <p>
              <Snippet attribute="snippets" hit={hit} separator=" - " />
              <br />
              <br />
              <a>{hit.description}</a>
              <br />
              <br />
              <a>Category: {hit.category}</a>
              <br />
              <a>Color: {hit.color}</a>
              <br />
              {hit.inStock ? <a>In Stock: Yes</a> : <a>In Stock: No</a>}
              <br />
              <a>Rating: {hit.rating}</a>
              <br />
              <a>deliveryTime: {hit.deliveryTime} days</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HitComponent;
