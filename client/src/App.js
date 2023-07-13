import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./global/Home";
import Auth from "./auth/Auth";
import { About, ContactUs, SavedBlogs, CreateBlog } from "./components/index";
import { useSelector } from "react-redux";

const App = () => {
  const initialEmail = Boolean(useSelector((state) => state.auth.email));
  console.log(initialEmail);
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/savedBlogs" element={<SavedBlogs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/createBlog" element={<CreateBlog />} />
        </Routes>
      </Router>
  );
};

export default App;
