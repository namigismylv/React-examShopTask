import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../Context/Context";
const Header = () => {
  const {basketItems}=useContext(MainContext)
  return (
    <header>
      <div className="header">
        <div className="header__top">
          <div className="header__top__left">
            <input type="text" placeholder="Search" />
          </div>
          <div className="header__top__middle">
            <Link to="#">Shoppers</Link>
          </div>
          <div className="header__top__right">
            <ul className="header__top__right__ul">
              <li>
                <Link><i class="fa-solid fa-user"></i></Link>
              </li>
              <li>
                <Link to='/wishlist'><i class="fa-regular fa-heart"></i></Link>
              </li>
              <li>
                <Link to="/basket"><i class="fa-solid fa-cart-shopping"></i> <sup>{basketItems.length}</sup></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__bottom">
          <ul className="header__bottom__ul">
            <li>
              <Link to="/">HOME <i class="fa-solid fa-chevron-down"></i> </Link>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
