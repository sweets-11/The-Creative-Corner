import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Home from "./global/Home";
import Auth from "./auth/Auth";
import { About, ContactUs, SavedBlogs, CreateBlog } from "./components/index";
import { store } from "./store";
import { Provider} from "react-redux";
import {inisAuthenticated} from "./auth/Auth";
if(inisAuthenticated === "false" ) {
  <Navigate to="/" />
}
const App = () => {

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
