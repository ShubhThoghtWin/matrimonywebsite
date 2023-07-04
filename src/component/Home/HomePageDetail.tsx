import React, { useState } from "react";
import Banner from "./assets/ban3.jpg";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import styles from "./styles.module.css";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import data from "./data";
import Image from "next/image";

const HomePageDetail = () => {
  console.log("data", data);
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "#b1a4fd;",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.2,
  ]);
  return (
    <>
      <Box className={styles.bgBanner}>
        <Typography
          style={{
            boxSizing: "border-box",
            width: "45%",
            textAlign: "center",
            fontSize: "18px",
            margin: "60px 0px 0px 40px",

            color: "coral",
            backgroundColor: "hsla(120, 1%, 15%, 0.1)",
          }}
        >
          We Have A Very Stringent And Personalized Screening Process To
          Hand–Pick Our Clients, Based On Criteria Such As Family Background,
          Academic And Professional Qualifications, Education, Interests,
          Matrimonial profile And Much More for Indian Wedding.
        </Typography>
      </Box>
      <Box className={styles.heading}>
        <Typography style={{ padding: "10px" }}>
          Our user-friendly interface and advanced search options make it
          effortless to navigate through profiles and connect with potential
          matches. Our dedicated team ensures the authenticity and privacy of
          every profile, providing a secure environment for your search.{" "}
        </Typography>

        <Box className={styles.wrapper}>
          <animated.div
            style={{
              ...rest,
              width: size,
              height: size,
              boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.05)",
            }}
            className={styles.container}
            onClick={() => set((open) => !open)}
          >
            {open ? (
              ""
            ) : (
              <p
                style={{
                  width: "100%",
                }}
              >
                {" "}
                Have a Look what, we offer to you !!
              </p>
            )}
            {open &&
              data.map((item) => (
                <Box className={styles.itemCard}>
                  <animated.div
                    className={styles.item}
                    style={{
                      ...item,
                      background: item.css,
                    }}
                  >
                    <Box>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14, fontWeight: 600 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="h5" component="div"></Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: "13px" }}
                          color="text.secondary"
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Box>
                  </animated.div>
                </Box>
              ))}
          </animated.div>
        </Box>
      </Box>
    </>
  );
};

export default HomePageDetail;
