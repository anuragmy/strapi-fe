/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import Cart from "../Cart";
import CartDropdown from "../Cart/CartDropdown";

const Header = () => {
  const cartHidden = useSelector((state) => state.cart.hidden);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link
          to="/"
          className="option"
          style={{ textDecoration: "none", color: "black", fontSize: "bold" }}
        >
          HOME
        </Link>

        <Cart method="hidecart" />
      </div>
      {cartHidden && <CartDropdown />}
    </div>
  );
};

export default Header;
