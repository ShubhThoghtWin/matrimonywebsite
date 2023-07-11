"use client";
import { Avatar, Box, Container, Typography } from "@mui/material";

import React from "react";

const UserProfile = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            backgroundColor: "red",
            marginTop: "20px",
            padding: "10px",
          }}
        >
          <Typography>User Name</Typography>
          <Avatar sx={{ width: "150px", height: "150px", margin: "auto" }}>
            S
          </Avatar>
        </Box>
      </Container>
    </Box>
  );
};

export default UserProfile;
