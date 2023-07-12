import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./global/Home";
import Auth from "./auth/Auth";
import { About, ContactUs, SavedBlogs, CreateBlog } from "./components/index";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth setIsAuth={setIsAuth}/>} />
        <Route path="/home" element={isAuth? <Home isAuth={isAuth} /> : <Navigate to="/" />} />
        <Route path="/about" element={<About setIsAuth={setIsAuth} />} />
        <Route path="/savedBlogs" element={<SavedBlogs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/createBlog" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
