import {Link} from 'react-router-dom';
import React from 'react';

export const Header = () => {
  return (
    <header className="header js-site-header">
      <div className="header__overlay"></div>
      <div className="wrap">
        <div className="header__container">
          <div className="header__home-logo">
            <a href="/" className="header__home">
              {' '}
              <img
                src="/assets/images/LogoHeader.png"
                alt=""
                className="header__logo"
              />{' '}
            </a>
          </div>

          <nav className="main-nav">
            <ul className="main-nav__list" role="menubar">
              <li className="main-nav__list-item" role="menuitem">
                <a href="#" className="main-nav__list-link">
                  ABOUT US
                </a>
              </li>

              <li className="main-nav__list-item" role="menuitem">
                <a href="#" className="main-nav__list-link">
                  LOCATIONS
                </a>
              </li>

              <li className="main-nav__list-item" role="menuitem">
                {/* <a href="/" className="main-nav__list-link">
                  SHOP
                </a> */}
                <Link to="/" className="main-nav__list-link">
                  SHOP
                </Link>
              </li>
            </ul>
          </nav>
          <div className="main-nav-cart">
            {/* <a href="/cart" className="main-nav-cart-link">
              cart
            </a> */}
            <Link to="/cart" className="main-nav-cart-link">
              cart
            </Link>
            <span className="main-nav-cart-qty">3</span>
          </div>

          <a href="#" className="site-header__hamburger hamburger js-menu-btn">
            <span></span>
          </a>
        </div>
      </div>
    </header>
  );
};
