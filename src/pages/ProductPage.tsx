import * as React from 'react';
import {Product} from '../components/products/Product';

export const ProductPage = () => {
  return (
    <div id="page" className="site">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>

      <div id="content" className="site-content">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            <div className="cards">
              <div className="wrap">
                <div className="cards__container">
                  <span className="pretitle">SHOP</span>
                  <h2 className="section-title">SAME OLD SAME OLD</h2>

                  <div className="row cards__wrapper">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                  </div>
                  <div className="row cards__wrapper"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
