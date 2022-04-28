import React from 'react';

export const CartItem = () => {
  return (
    <div className="cart__item">
      <div className="cart__item-body-image">
        <img
          src="/assets/images/camera.png"
          alt=""
          className="cart__item-img"
        />
      </div>
      <div className="cart__item-details">
        <span className="cart__item-name">RANGEFINDER CAMERA</span>
        <span className="cart__item-info">BRAND: ZENIT</span>
        <span className="cart__item-info">YEAR OF MANUFACTURE: 1987</span>
        <span className="cart__item-info">AMOUNT: 1</span>
      </div>
      <div className="cart__item-button">
        <a className="btn btn--sm" href="javascript:;">
          REMOVE FROM CART
        </a>
      </div>
      <div className="cart__item-price">
        <span className="cards__price">
          PRICE: <span>$36.5</span>
        </span>
      </div>
    </div>
  );
};