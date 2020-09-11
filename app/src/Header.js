import React from "react";
import "./Header.css";
import logo from "./amazon-logo.jpg";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();

  const handleClickShoppingCart = () => {
    history.push("/checkout")
  }
  
  return (
    <div className="header">
      {/* logo */}
      <img alt="amazon logo" className="header__logo" src={logo} />
      {/* search */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* nav items */}
      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__navOptionPlainLine">Hello, Sign in</span>
          <span className="header__navOptionBoldLine">Account & Lists</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionPlainLine">Returns</span>
          <span className="header__navOptionBoldLine">& Orders</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionBoldLine">Try Prime</span>
        </div>

        <div onClick={handleClickShoppingCart} className="header__navOption header__navOptionShopping">
          <div className="header__navOptionShoppingCart">
            <span className="header__navOptionItemCount">0</span>
            <ShoppingCartOutlinedIcon className="header__navOptionShoppingCartIcon" />
          </div>
          <span className="header__navOptionBoldLine">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
