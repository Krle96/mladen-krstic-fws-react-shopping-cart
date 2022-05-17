import {Link} from 'react-router-dom';
import {useCart} from '../../store/cart-context';

export const Header = () => {
  const {state: cart} = useCart();

  return (
    <header className="header js-site-header">
      <div className="header__overlay"></div>
      <div className="wrap">
        <div className="header__container">
          <div className="header__home-logo">
            <Link to="/" className="header__home">
              <img
                src="/assets/images/LogoHeader.png"
                alt=""
                className="header__logo"
              />
            </Link>
          </div>

          <nav className="main-nav">
            <ul className="main-nav__list" role="menubar">
              <li className="main-nav__list-item" role="menuitem">
                <a href="/" className="main-nav__list-link">
                  ABOUT US
                </a>
              </li>

              <li className="main-nav__list-item" role="menuitem">
                <a href="/" className="main-nav__list-link">
                  LOCATIONS
                </a>
              </li>

              <li className="main-nav__list-item" role="menuitem">
                <Link to="/" className="main-nav__list-link">
                  SHOP
                </Link>
              </li>
            </ul>
          </nav>
          <div className="main-nav-cart">
            <Link to="/cart" className="main-nav-cart-link">
              cart
            </Link>
            <span className="main-nav-cart-qty">{cart.getItemsAmount()}</span>
          </div>

          <a href="/" className="site-header__hamburger hamburger js-menu-btn">
            <span></span>
          </a>
        </div>
      </div>
    </header>
  );
};
