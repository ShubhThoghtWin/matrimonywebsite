import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <h1>Matrimonial Website</h1>
        </div>
        <div style={{ float: "right", marginRight: "500px" }}>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <Link href="#" className="link">
                ABOUT
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link href="#" className="link">
                CONTACT
              </Link>
            </li>

            <li className="option mobile-option" onClick={closeMobileMenu}>
              <Link href="#" className="link">
                SIGN-IN
              </Link>
            </li>
          </ul>
        </div>
        <ul className="signin-up">
          <li className="sign-in" onClick={closeMobileMenu}>
            <Link href="#" className="link">
              SIGN-IN
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
