import * as React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {CartItem} from '../components/cart/CartItem';
import SharedBtn from '../components/shared/SharedBtn';
import CartService from '../domain/cart/cartService';
import {RootState} from '../app/store';

export const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems.value);

  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate('/');
  };

  return (
    <div id="page" className="site">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>

      <div id="content" className="site-content">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            <div className="cart">
              <div className="wrap">
                <div className="cart__container">
                  <div className="cart__top">
                    <div className="cart__top-btn">
                      <SharedBtn variant="black" onClick={handleBackToShop}>
                        Back to shop
                      </SharedBtn>
                    </div>
                    <div className="cart__title">
                      <span className="pretitle">SHOP</span>
                      <h2 className="section-title">SAME OLD SAME OLD</h2>
                    </div>
                    <div className="cart__top-btn">
                      <SharedBtn
                        variant="black"
                        onClick={() => {
                          // console.log('checkout clicked');
                          CartService.completeCheckout();
                        }}>
                        CHECKOUT
                      </SharedBtn>
                    </div>
                  </div>

                  <div className="row cart__wrapper">
                    {cartItems.map((name, index) => {
                      return <CartItem name={name} index={index} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
