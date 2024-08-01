import React from 'react';
import { NavLink , Link } from "react-router-dom";

const NavBar = () => {
    return (
    <header>
      <nav className="menu-navbar">
          <ul className="ul-menu">
              <Link to="/" className="li-menu"><li>_Homepage</li></Link>
              <Link to="/projects" className="li-menu"><li>_Projects</li></Link>
              <Link to="/contacts" className="li-menu"><li >_Skills</li></Link>
              <li className="li-menu">_Contact me</li>
              <li className="li-menu-logo">_Daniele Di Lecce</li>
          </ul>
      </nav>
    </header>
    )
};

export default NavBar;