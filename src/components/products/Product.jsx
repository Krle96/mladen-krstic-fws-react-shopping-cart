import React from 'react';
import CartItemEntity from '../../domain/cartItem/cartItemEntity';
import CartItemFactory from '../../domain/cartItem/cartItemFactory';
// import {useDispatch} from 'react-redux';

import IncrementDecrementCounter from '../parts/PartIncrementDecrementInput';
import SharedBtn from '../shared/MainBtn';
// import {addCart} from '../../redux/features/cartSlice';

export const Product = ({product, cart}) => {
  // const [cartItemNameInput, setCartItemNameInput] = useState('');

  const addToCart = (product, productAmount, cart) => {
    let cartItem = cart.findItem(product.id);
    cartItem instanceof CartItemEntity
      ? cartItem.increaseAmount(Number(productAmount))
      : cart.addItem(CartItemFactory.make(product, Number(productAmount)));
  };

  // const dispatch = useDispatch();

  // const handleAddCartItem = () => {
  //   if (!cartItemNameInput) return;
  //   dispatch(addCart(cartItemNameInput));
  //   setCartItemNameInput('');
  // };

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
        {/* <input
          value={cartItemNameInput}
          onChange={e => setCartItemNameInput(e.target.value)}
        /> */}
        <div className="cards__item-footer">
          <IncrementDecrementCounter />
          {/* <SharedBtn onClick={() => handleAddCartItem()}>ADD TO CART</SharedBtn> */}
          <SharedBtn onClick={() => addToCart(product, 1, cart)}>
            ADD TO CART
          </SharedBtn>

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
