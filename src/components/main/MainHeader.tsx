import React from 'react';

export const MainHeader = () => {
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
                <a href="javascript:;" className="main-nav__list-link">
                  ABOUT US
                </a>
              </li>

              <li className="main-nav__list-item" role="menuitem">
                <a href="javascript:;" className="main-nav__list-link">
                  LOCATIONS
                </a>
              </li>

              <li className="main-nav__list-item" role="menuitem">
                <a href="/" className="main-nav__list-link">
                  SHOP
                </a>
              </li>
            </ul>
          </nav>
          <div className="main-nav-cart">
            <a href="/cart" className="main-nav-cart-link">
              cart
            </a>
            <span className="main-nav-cart-qty">3</span>
          </div>

          <a
            href="javascript:"
            className="site-header__hamburger hamburger js-menu-btn">
            <span></span>
          </a>
        </div>
      </div>
    </header>
  );
};
