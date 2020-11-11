import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import img1 from "./PokeMart.png"
import img2 from "./PokeText.png"


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
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
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
        <img
        alt=""
        src={img1}
        width="60"
        height="60"
        className="d-inline-block align-top "
        />
        <img
        alt=""
        src={img2}
        width="230"
        height="70"
        className="d-inline-block align-top "
        />
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
