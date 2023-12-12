import { Link } from "react-router-dom";
import cart_icon from "../assets/cart_icon.png";
import logo from "../assets/ecommerce2.png";
import "./Navbar.css";
import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/products.context";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { productsCart } = useContext(ProductContext);

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <p>Tropify</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            About
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/men">
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/women">
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("explore");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/explore"
          >
            Explore
          </Link>
          {menu === "explore" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{productsCart.length}</div>
      </div>
    </div>
  );
};

export default Navbar;
