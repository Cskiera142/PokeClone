import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div id="nav">
      <ul id="nav-left">
        <li>BULBAPEDIA</li>
        <Link to="/news">News</Link>
        <Link to="/">Bulbapedia</Link>
        <Link to="/forums">Forums</Link>
        <li>Discord</li>
        <li>More</li>
      </ul>
      <ul id="nav-right">
        <li>Editors</li>
        <li>Account</li>
        <li>
          <input />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
