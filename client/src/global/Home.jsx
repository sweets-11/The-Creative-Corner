import React from "react";
import { Carousel, Blog } from "../components/index";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
