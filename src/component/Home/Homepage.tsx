"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";

import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  const springsRight = useSpring({
    from: { x: 900 },
    to: { x: 300 },
    config: {
      duration: 2000,
    },
  });

  const springsLeft = useSpring({
    from: { x: 0 },
    to: { x: 150 },
    config: {
      duration: 500,
    },
  });
  // console.log(img1, ">>>>>>>>");
  return (
    <>
      <Navbar />
      <Banner></Banner>
      <Footer />
    </>
  );
};

export default HomePage;
