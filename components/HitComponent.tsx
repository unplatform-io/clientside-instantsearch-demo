import React from 'react';
import { Hit } from 'react-instantsearch-core';

type props = {
  image: string
  price: string
  name: string
  description: string
}

const HitComponent: React.ComponentType<{ hit: Hit<props>}> = ({ hit:{image, price, name, description} }) => {
  return (
      <div className="hit">
        <div className="hit-image">
          <img src={image}></img>
        </div>
        <div className="hit-content">
          <div className="hit-price">
            &euro; {price}
          </div>
          <div className="hit-name">
            <b>{name}</b>
          </div>
          <div className="hit-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
}

export default HitComponent
