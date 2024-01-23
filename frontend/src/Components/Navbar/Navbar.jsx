import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";

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
          Gallery{menu === "Gallery" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("Gifts");
          }}
        >
          Gifts{menu === "Gifts" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ShowPiece");
          }}
        >
          ShowPiece{menu === "ShowPiece" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Frames");
          }}
        >
          Frames{menu === "Frames" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt="cart-icon" />
        <div className="nav-cart-count"></div>
      </div>
    </div>
  );
};

export default Navbar;
