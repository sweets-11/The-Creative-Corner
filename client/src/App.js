import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./global/Home";


import {
  About,
  ContactUs,
  SavedBlogs,
  CreateBlog
} from "./components/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/savedBlogs" element={<SavedBlogs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/createBlog" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
