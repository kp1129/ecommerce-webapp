import React from "react";
import "./Header.css";
import logo from "./amazon-logo.jpg";

const Header = () => {
  return (
    <div className="header">
      {/* logo */}
      <img alt="amazon logo" className="header__logo" src={logo} />
      {/* search */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>
      {/* nav items */}
      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__navOptionTopLine">Hello, Sign in</span>
          <span className="header__navOptionBottomLine">Account & Lists</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionTopLine">Returns</span>
          <span className="header__navOptionBottomLine">& Orders</span>
        </div>

        <div className="header__navOption">
          {/* <span className="header__navOptionTopLine">Hello, Sign in</span> */}
          <span className="header__navOptionBottomLine">Try Prime</span>
        </div>

        <div className="header__navOption">
          {/* <span className="header__navOptionTopLine">Hello, Sign in</span> */}
          <span className="header__navOptionBottomLine">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
