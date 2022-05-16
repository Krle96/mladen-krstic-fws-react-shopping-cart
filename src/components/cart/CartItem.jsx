import React from 'react';
// import cartSlice from '../../redux/features/cartSlice';
// import {useDispatch} from 'react-redux';
// import {removeCartItem} from '../../redux/features/cartSlice';
import SharedBtn from '../shared/MainBtn';
import {useState, useEffect} from 'react';

// interface cartItemTypes {
//   name: string;
//   index: number;
// }

export const CartItem = ({id, name, price, photo, cart}) => {
  // const dispatch = useDispatch();

  return (
    <div className="cart__item">
      <div className="cart__item-body-image">
        <img src={photo} alt="" className="cart__item-img" />
      </div>
      <div className="cart__item-details">
        <span className="cart__item-name">{name}</span>
        <span className="cart__item-info">BRAND: ZENIT</span>
        <span className="cart__item-info">YEAR OF MANUFACTURE: 1987</span>
        <span className="cart__item-info">AMOUNT: 1</span>
      </div>

      <div className="cart__item-button">
        <SharedBtn
          onClick={() => cart.removeItem(id)}
          // onClick={() => {
          //   dispatch(removeCartItem(index));
          // }}
          size="sm">
          REMOVE FROM CART
        </SharedBtn>
      </div>
      <div className="cart__item-price">
        <span className="cards__price">
          PRICE: <span>${price}</span>
        </span>
      </div>
    </div>
  );
};
