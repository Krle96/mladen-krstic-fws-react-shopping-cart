import * as React from 'react';
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__wrap">
          <div className="footer__logo">
            <Link to="/" className="header__home">
              <img src="/assets/images/LogoFooter.png" alt="" />
            </Link>
          </div>
          <div className="copyright">
            <span>Copyright © 2022 forwardslashny.com</span>{' '}
            <span className="copyright-line">|</span>{' '}
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
