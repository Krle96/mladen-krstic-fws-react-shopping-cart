import React from 'react';
import MainBtn from '../shared/MainBtn';
import {useCart} from '../../store/cart-context';

type Props = {
  id: number;
  name: string;
  price: number;
  photo: string;
  amount: number;
};

export const CartItem = ({id, name, price, photo, amount}: Props) => {
  const {dispatch} = useCart();

  return (
    <div className="cart__item">
      <div className="cart__item-body-image">
        <img src={photo} alt="" className="cart__item-img" />
      </div>
      <div className="cart__item-details">
        <span className="cart__item-name">{name}</span>
        {/* <span className="cart__item-info">BRAND: ZENIT</span> */}
        {/* <span className="cart__item-info">YEAR OF MANUFACTURE: 1987</span> */}
        <span className="cart__item-info">AMOUNT: {amount}</span>
      </div>

      <div className="cart__item-button">
        <MainBtn
          onClick={() => {
            dispatch({type: 'remove', payload: id});
          }}
          size="sm">
          REMOVE FROM CART
        </MainBtn>
      </div>
      <div className="cart__item-price">
        <span className="cards__price">
          PRICE: <span>${price}</span>
        </span>
      </div>
    </div>
  );
};
