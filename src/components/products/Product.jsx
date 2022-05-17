import {useState} from 'react';
import CartItemFactory from '../../domain/cartItem/cartItemFactory';
import {useCart} from '../../store/cart-context';

import IncrementDecrementCounter from '../parts/PartIncrementDecrementInput';
import SharedBtn from '../shared/MainBtn';

export const Product = ({product}) => {
  const {state: cart, dispatch} = useCart();
  const [amount, setAmount] = useState(1);

  const getAmount = amount => {
    console.log('In product.jsx');
    console.log(amount);
    setAmount(amount);
  };

  const addToCart = (product, productAmount) => {
    let cartItem = cart.findItem(product.id);
    cartItem
      ? dispatch({type: 'increaseAmount', payload: {product, productAmount}})
      : dispatch({
          type: 'add',
          payload: CartItemFactory.make(product, Number(productAmount)),
        });
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
          <IncrementDecrementCounter onGetAmount={getAmount} />
          <SharedBtn onClick={() => addToCart(product, amount)}>
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
