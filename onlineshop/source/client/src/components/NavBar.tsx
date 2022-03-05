import React from 'react';
import './../styles/NavBar.scss';
import { Link } from 'react-router-dom';
import { ShoppingBasketOutlined, Person } from '@mui/icons-material';

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
            <Link to="/admin">
              <Person sx={{ color: '#666564ce', fontSize: '38px', marginTop: '5px' }} />
            </Link>
            <Link to="/cart">
              <ShoppingBasketOutlined sx={{ color: '#666564ce', fontSize: '38px', marginTop: '5px' }} />
            </Link>
          </div>
        </div>

        <ul className="links">
          <li>
            <Link to="/products" className="links_li">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="links_li">
              About us
            </Link>
          </li>
          <div>
            <Link to="/" className="logo">
              <img className="logo_icon" src={image} />
            </Link>
          </div>
          <li>
            <Link to="/delivery" className="links_li">
              Delivery
            </Link>
          </li>
          <li>
            <Link to="/support" className="links_li">
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
