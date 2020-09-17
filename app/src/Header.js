import React from "react";
import "./Header.css";
import logo from "./amazon-logo.jpg";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { Link } from 'react-router-dom';

import { useStateValue } from './StateProvider';

const Header = () => {
  // essentially [state, setState]
  const [{ cart }, dispatch ] = useStateValue();
  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img alt="amazon logo" className="header__logo" src={logo} />
      </Link>
      {/* search */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* nav items */}
      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none"}}>
        <div className="header__navOption header__navOptionSignIn">
          <span className="header__navOptionPlainLine">Hello, Sign in</span>
          <span className="header__navOptionBoldLine">Account & Lists</span>
        </div>
        </Link>

        <div className="header__navOption">
          <span className="header__navOptionPlainLine">Returns</span>
          <span className="header__navOptionBoldLine">& Orders</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionBoldLine">Try Prime</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none"}}>
        <div  className="header__navOption header__navOptionShopping">
          <div className="header__navOptionShoppingCart">
  <span className="header__navOptionItemCount">{cart?.length}</span>
            <ShoppingCartOutlinedIcon className="header__navOptionShoppingCartIcon" />
          </div>
          <span className="header__navOptionBoldLine">Cart</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
