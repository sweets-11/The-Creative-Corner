import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./global/Home";
import Auth from "./auth/Auth";
import { About, ContactUs, CreateBlog } from "./components/index";
import { useSelector } from "react-redux";
import CurrentBlog from "./components/CurrentBlog";
import Protected from "./Protected";
import { UpdateBlog } from "./components/CurrentBlog";
import MyBlogs from "./components/MyBlogs";

const App = () => {
  const initialEmail = Boolean(useSelector((state) => state.auth.email));
  console.log(initialEmail);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Protected Component={Home} />} />
        <Route path="/about" element={<Protected Component={About} />} />
        <Route
          path="/contactUs"
          element={<Protected Component={ContactUs} />}
        />
        <Route
          path="/createBlog"
          element={<Protected Component={CreateBlog} />}
        />
        <Route
          path="/currentBlog/:userID"
          element={<Protected Component={CurrentBlog} />}
        />
        <Route
          path="/updateBlog/:userID"
          element={<Protected Component={UpdateBlog} />}
        />

        <Route
          path="myblogs"
          element={<Protected Component={MyBlogs} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
