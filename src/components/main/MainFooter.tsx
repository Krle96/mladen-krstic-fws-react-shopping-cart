import * as React from 'react';

export const MainFooter = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__wrap">
          <div className="footer__logo">
            <a href="/" className="header__home">
              <img src="/assets/images/LogoFooter.png" alt="" />
            </a>
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