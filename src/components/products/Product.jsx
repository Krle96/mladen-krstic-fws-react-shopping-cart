import React from 'react';
import IncrementDecrementCounter from '../parts/PartIncrementDecrementInput';
import SharedBtn from '../shared/SharedBtn';

export const Product = ({product}) => {
  const addToCart = () => {
    console.log(`dodao proizvod: ${product.name}`);
  };

  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="cards__item">
        <div className="cards__item-body">
          <div className="cards__item-body-image">
            <img
              src={product.photoUrl}
              alt={product.name}
              className="cards__item-img"
            />
          </div>
          <span className="cards__item-body-name">{product.name}</span>
          <span className="cards__item-body-price">${product.price}</span>
        </div>
        <div className="cards__item-footer">
          <IncrementDecrementCounter />

          <SharedBtn onClick={() => addToCart()}>ADD TO CART</SharedBtn>
          <div className="heart">
            <img
              src="/assets/images/favorite.png"
              alt="heart"
              className="heart-icon heart__full"
            />
            <img
              src="/assets/images/favorite-border.png"
              alt="heart"
              className="heart-icon heart__empty"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
