import React from 'react';
import './../styles/NavBar.scss';
import { Link } from 'react-router-dom';

import cart from 'src/assets/picture/icons8-корзина-64 (1).jpg';
import reg from 'src/assets/picture/icons8-мужчина-64.jpg';
import image from 'src/assets/picture/1794_oooo.plus.jpg';

function NavBar() {
  return (
    <div className="nav-top">
      <nav className="nav">
        <div className="icons_block">
          <div className="language">
            <div>RU</div>
            <div>EN</div>
          </div>
          <div className="icons">
            <Link to="">
              <img className="icons_reg" src={reg} />
            </Link>
            <Link to="">
              <img className="icons_cart" src={cart} />
            </Link>
          </div>
        </div>

        <ul className="links">
          <li>
            <Link to="/shop" className="links_li">
              Products
            </Link>
          </li>
          <li>
            <Link to="/" className="links_li">
              About us
            </Link>
          </li>
          <div>
            <Link to="/" className="logo">
              <img className="logo_icon" src={image} />
            </Link>
          </div>
          <li>
            <Link to="/table" className="links_li">
              Delivery
            </Link>
          </li>
          <li>
            <Link to="/table" className="links_li">
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
