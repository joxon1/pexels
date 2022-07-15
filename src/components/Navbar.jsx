import React from "react";
import logo from "../assets/logo.jpg";
import logo_rj from "../assets/logo_rj.jpg";
import { BsSearch } from "react-icons/bs";
import "./Navbar.scss";

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
        <img src={logo_rj} alt="RJ" />
      </div>
    </div>
  );
};

export default Navbar;
