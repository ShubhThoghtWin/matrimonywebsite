import React from "react";

import { Box, Button, Container, TextField, Typography } from "@mui/material";

import Link from "next/link";
import Image from "next/image";
import img from "../Home/assets/amish-thakkar-1rLF6hxmm7M-unsplash.jpg";

const Login = () => {
  return (
    <Box>
      <Container
        sx={{
          background: "white",
          width: "80%",
          margin: "auto",
          height: "70vh",
          display: "flex",
          justifyContent: "space-between",
          p: 3,
          gap: "20px",
        }}
      >
        <Box>
          <Box sx={{ background: "red", width: "400px", height: "50vh" }}>
            <Image src={img.src} alt="img" width={400} height={400}></Image>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            margin: "auto",
          }}
        >
          <Typography>Enter Credentials to login</Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "auto" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "auto" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: "row !important",
            }}
          >
            <Box>
              {" "}
              <Button
                sx={{
                  width: "auto",
                  margin: "auto auto auto 20px",
                  alignItems: "center",
                }}
                variant="contained"
              >
                Submit
              </Button>
            </Box>
            <Box>
              <Link href="/userprofileregistration">
                <Button
                  sx={{
                    width: "auto",
                    margin: "auto auto auto 50px",
                    alignItems: "center",
                  }}
                  variant="contained"
                >
                  SignUp
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
