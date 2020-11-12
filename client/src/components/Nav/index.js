import React from "react";
import img2 from "./PokeText.png";
import img1 from "./PokeMart.png";
import img3 from "./pre_ball.png"
import Auth from "../../utils/auth";
import Cart from "../Cart";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Nav(props) {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className= "login">
        <ul className="">
          <li className="">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
        </div>
      );
    } else {
      return (
        <div className= "login">
        <ul className="flex-column">
          <li className="">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="">
            <Link to="/login">Login</Link>
          </li>
        </ul>
        </div>
      );
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <header className="flex-row px-1">  
      <div className= "drop_button">
      <Image className="cat_ball" alt="" src={img3} onClick={props.drawerClickHandler} width="79" height="79" />
      </div>
      <div className= "logo">
      <Link to="/" onClick={refreshPage}>
        <Image alt="" src={img1} width="70" height="70" />
        <Image alt="" src={img2} min-width="150px" height="70" />
        <Image alt="" src={img1} width="70" height="70" />
      </Link>
      </div>
      <nav>{showNavigation()}</nav>
      <Cart />
    </header>
  );
}

export default Nav;
