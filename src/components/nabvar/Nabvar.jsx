import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.css";

const Nabvar = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="left">
          <NavLink to="/about" className="first" end>
            About us
          </NavLink>
          <NavLink to="/project">Project</NavLink>
        </div>
        <div className="middel">
          <Link to="/">
            <h1>Lergncy</h1>
            <span className="ball-1"></span>
            <span className="ball-2"></span>
          </Link>
        </div>
        <div className="right">
          <NavLink to="/service" className="first">
            Service
          </NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
