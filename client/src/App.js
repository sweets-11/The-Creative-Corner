import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./global/Navbar";
import Home from "./global/Home";
import Footer from "./global/Footer";

import {
  ContactUs,
  NewsLetter,
  SavedBlog,
} from "./components/index";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedBlog" element={<SavedBlog />} />
        <Route path="/newsLetter" element={<NewsLetter />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
