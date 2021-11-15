import React from "react";
import { Hit } from "react-instantsearch-core";
import Image from "next/image";

type Props = {
  id: number;
  name: string;
  image: string;
  price: number;
  title: string;
  description: string;
  category: string;
  color: string;
  rating: {
    rate: number;
  };
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
              {hit.description}
              <br />
              <br />
              <a>Id: {hit.id}</a>
              <br />
              <a>Rating: {hit.rating.rate}</a>
              <br />
              <a>Category: {hit.category}</a>
              <br />
              <a>Color: {hit.color}</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HitComponent;
