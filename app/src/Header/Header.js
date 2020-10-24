import React from "react";
import "./Header.css";
import logo from "../images/amazon-logo.jpg";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { Link, useParams } from "react-router-dom";

import { useStateValue } from "../StateProvider";
import { auth } from "../firebase/firebase";

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const currentLoc = useParams();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

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
        <Link
          to={user ? currentLoc : "/login"}
          style={{ textDecoration: "none" }}
        >
          <div
            onClick={handleAuthentication}
            className="header__navOption header__navOptionSignIn"
          >
            <span className="header__navOptionPlainLine">
              Hello, {user ? user.email : "Guest"}
            </span>
            <span className="header__navOptionBoldLine">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__navOption">
          <span className="header__navOptionPlainLine">Returns</span>
          <span className="header__navOptionBoldLine">& Orders</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionBoldLine">Try Prime</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__navOption header__navOptionShopping">
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
