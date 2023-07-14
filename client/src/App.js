import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./global/Home";
import Auth from "./auth/Auth";
import { About, ContactUs, CreateBlog } from "./components/index";
import { useSelector } from "react-redux";
import CurrentBlog from "./components/CurrentBlog";

import {UpdateBlog} from "./components/CurrentBlog";

const App = () => {
  const initialEmail = Boolean(useSelector((state) => state.auth.email));
  console.log(initialEmail);
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/currentBlog/:userID" element={<CurrentBlog />} />
          <Route path="/updateBlog/:userID" element={<UpdateBlog />} />
        </Routes>
      </Router>
  );
};

export default App;
