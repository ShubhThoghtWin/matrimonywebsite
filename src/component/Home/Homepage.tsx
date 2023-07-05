"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";

import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Banner></Banner>
      <Footer />
    </>
  );
};

export default HomePage;
