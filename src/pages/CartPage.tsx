import * as React from 'react';
import {CartItem} from '../components/cart/CartItem';

export const CartPage = () => {
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
                      <a className="btn btn--black" href="/">
                        BACK TO SHOP
                      </a>
                    </div>
                    <div className="cart__title">
                      <span className="pretitle">SHOP</span>
                      <h2 className="section-title">SAME OLD SAME OLD</h2>
                    </div>
                    <div className="cart__top-btn">
                      <a className="btn btn--black" href="javascript:;">
                        CHECKOUT
                      </a>
                    </div>
                  </div>

                  <div className="row cart__wrapper">
                    <CartItem />
                    <CartItem />
                    <CartItem />
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
