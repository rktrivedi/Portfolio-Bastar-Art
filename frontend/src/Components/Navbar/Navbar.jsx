import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Gallery");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo" src={logo} alt="logo" />
        <p>Bastar Art</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Gallery");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/Gallery">Gallery </Link>
          {menu === "Gallery" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("Gifts");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/Gifts">Gifts</Link>
          {menu === "Gifts" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ShowPiece");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/ShowPiece">ShowPiece</Link>
          {menu === "ShowPiece" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Frames");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/Frames">Frames</Link>
          {menu === "Frames" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration:'none'}} to="/login">
          {" "}
          <button>Login</button>{" "}
        </Link>
        <Link to="/cart">
          {" "}
          <img src={cart} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count"></div>
      </div>
    </div>
  );
};

export default Navbar;
