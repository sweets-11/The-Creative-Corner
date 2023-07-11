import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./global/Navbar/Navbar";
import Home from "./global/Home";
import Footer from "./global/Footer";


import {
  About,
  ContactUs,
  SavedBlog,
} from "./components/index";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/savedBlog" element={<SavedBlog />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
