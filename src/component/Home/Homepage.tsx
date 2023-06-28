"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import img1 from "./assets/img1.png";
import Image from "next/image";
import { Container, Box } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import hand2 from "./assets/hand2.jpeg";
import hand3 from "./assets/hand3.jpg";
import img4 from "./assets/img4.jpg";
import HomePageDetail from "./HomePageDetail";
import styles from "./styles.module.css";

const HomePage = () => {
  const springsRight = useSpring({
    from: { x: 1100 },
    to: { x: 950 },
    config: {
      duration: 500,
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
      <Container>
        {/* <div className="homePage">jhkhkhj</div> */}
        <Parallax
          pages={2}
          style={{ top: "0", left: "0", background: "white", opacity: "0.8" }}
        >
          <ParallaxLayer
            offset={0}
            speed={0.25}
            style={
              {
                // background: "cyan",
                // backgroundImage: `url(${})`,
                // backgroundImage: `url(${hand2.src})`,
                // backgroundSize: "cover",
              }
            }
          >
            <div id="one" className={styles.one}>
              <div>
                <Image src={hand3} alt="img"></Image>
              </div>
              <div className="text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.25}
            style={{
              background: "white",
              backgroundSize: "cover",
            }}
          >
            <div id="one" style={{ bottom: 0 }}>
              <HomePageDetail />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.5}
            speed={0.25}
            style={{
              background: "white",
              backgroundSize: "cover",
              bottom: 0,
            }}
          >
            <div id="one" style={{ bottom: 0 }}>
              <HomePageDetail />
            </div>
          </ParallaxLayer>
        </Parallax>

        {/* <Box>
          <animated.div
            style={{
              marginTop: "100px",
              width: 80,
              height: 80,
              // background: "#ff6d6d",
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
              borderRadius: 8,
              // width: "100px",
              ...springsRight,
            }}
          />
        </Box>

        <Box>
          <animated.div
            style={{
              // marginTop: "100px",
              width: 80,
              height: 80,
              // background: "#ff6d6d",
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
              borderRadius: 8,
              // width: "100px",
              ...springsLeft,
            }}
          />
        </Box> */}
      </Container>
    </>
  );
};

export default HomePage;
