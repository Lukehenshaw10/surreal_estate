import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import image from "../surrealEstateLogo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="surrealEstateLogo" src={image} alt="surrealEstateLogo" />
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-item" to="/add-property">
          Add Property
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
