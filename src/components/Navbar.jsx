import React from "react";
import logo from "../assets/logo.jpg";
import logo_rj from "../assets/logo_rj.jpg"
import { BsSearch } from "react-icons/bs";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="pexels" />
      </div>
      <div className="src">
        <input type="text" placeholder="Поиск бесплатных изображений" />
        <BsSearch className="src_icon" />
      </div>
      <div className="admin">
        <img src={logo_rj} alt="RJ" />
      </div>
    </div>
  );
};

export default Navbar;
