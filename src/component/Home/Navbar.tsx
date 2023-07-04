"use client";
import React, { useState } from "react";
import Link from "next/link";

import "./navbar.css";
import { Box } from "@mui/material";
// import { useRouter } from "next/router";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const router = useRouter();

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <Box>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <Box className="navbar-container">
          <Link href="/" className="navbar-logo">
            Matrimonial Site
          </Link>

          <ul className="navbar-menu">
            <li
              className="navbar-item"
              // className={`navbar-item ${
              //   router.pathname === "/" ? "active" : ""
              // }`}
            >
              Home
            </li>
            <li
              className="navbar-item"
              // className={`navbar-item ${
              //   router.pathname === "/" ? "active" : ""
              // }`}
            >
              Login
            </li>
          </ul>
        </Box>
      </nav>
    </Box>
  );
};

export default Navbar;
