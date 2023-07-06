import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import Login from "../Login/Login";
import styled from "@emotion/styled";

const DialogBox = styled(Dialog)`
  backgroundcolor: none;
  color: red;
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <Typography onClick={handleClickOpen}>SIGN-IN</Typography>
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

      <Dialog
        PaperProps={{
          sx: {
            background: "none",
            boxShadow: "none",
          },
        }}
        maxWidth="lg"
        fullScreen={false}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll="body"
      >
        <Login />
      </Dialog>
    </div>
  );
};

export default Navbar;
