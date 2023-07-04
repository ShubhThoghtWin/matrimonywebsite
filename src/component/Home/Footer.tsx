import React from "react";
import styles from "./Footer.module.css";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <footer className={styles.footer}>
        <p>© 2023 Your Matrimonial Website. All rights reserved.</p>
      </footer>
    </Box>
  );
};

export default Footer;
