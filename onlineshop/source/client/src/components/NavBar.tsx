import React from 'react';
import './../styles/NavBar.scss';

function NavBar() {
  return (
    <nav id="menu">
      <div className="menu-item">
        <div className="menu-text">
          <a href="#">About us</a>
        </div>
        <div className="sub-menu">
          <div className="icon-box">
            <div className="text">
              <div className="title">
                Our manufacture <i className="far fa-arrow-right" />
              </div>
            </div>
          </div>
          <div className="icon-box">
            <div className="text">
              <div className="title">
                Our materials and suppliers <i className="far fa-arrow-right" />
              </div>
            </div>
          </div>
          <div className="icon-box">
            <div className="text">
              <div className="title">
                Location <i className="far fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-item highlight">
        <div className="menu-text">
          <a href="#">Products</a>
        </div>
        <div className="sub-menu double">
          <div className="icon-box gb a">
            <div className="text">
              <div className="title">
                Jackets <i className="far fa-arrow-right" />
              </div>
              <div className="sub-text">An enternal classic of your wardrobe</div>
            </div>
          </div>
          <div className="icon-box gb b">
            <div className="text">
              <div className="title">
                Treanch coats <i className="far fa-arrow-right" />
              </div>
              <div className="sub-text">Trendy coats for your outfit</div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-item highlight">
        <div className="menu-text">
          <a href="#">Support</a>
        </div>
        <div className="sub-menu triple">
          <div className="box">
            <h3>Support</h3>
            <a href="#">Delivery</a>
            <a href="#">Payment</a>
            <a href="#">Terms of return</a>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-text">
          <a href="#">Sigh in</a>
        </div>
      </div>
      <div id="sub-menu-container">
        <div id="sub-menu-holder" />
      </div>
    </nav>
  );
}

export default NavBar;
