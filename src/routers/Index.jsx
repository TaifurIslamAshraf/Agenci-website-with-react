import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Project from "../pages/project/Project";
import Service from "../pages/service/Service";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
