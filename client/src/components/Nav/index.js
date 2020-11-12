import React from "react";
import img2 from "./PokeText.png";
import img1 from "./PokeMart.png";
import Auth from "../../utils/auth";
import Cart from "../Cart";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-column">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <Link to="/">
        <Image alt="" src={img1} width="60" height="60" />
        <Image alt="" src={img2} min-width="150px" height="70" />
      </Link>

      <nav>{showNavigation()}</nav>
      <Cart />
    </header>
  );
}

export default Nav;
