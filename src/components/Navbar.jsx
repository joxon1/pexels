import React from "react";
import logo from "../assets/logo.jpg";
import logo_rj from "../assets/logo_rj.jpg";
import { BsSearch } from "react-icons/bs";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ srchPhoto, getImg }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="pexels" />
      </div>
      <div className="src">
        <input
          type="text"
          placeholder="Поиск бесплатных изображений"
          onChange={srchPhoto}
        />
        <BsSearch className="src_icon" type="submit" onClick={getImg} />
      </div>
      <div className="admin">
        <a href="http://joxon1.github.io/portfolio" target="_blank">
          <img src={logo_rj} alt="RJ" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
