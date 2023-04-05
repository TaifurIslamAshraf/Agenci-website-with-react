import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/nabvar/Nabvar";

import "./layout.css";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
