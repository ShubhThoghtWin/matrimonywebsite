import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import styles from "./styles.module.css";
// import data from "./data";

// Gradients taken from: https://webgradients.com/
const data = [
  {
    name: "Rare Wind",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
  },
  {
    name: "Saint Petersburg",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 200,
  },
  {
    name: "Deep Blue",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height: 200,
  },
  {
    name: "Ripe Malinka",
    description: "#f093fb → #f5576c",
    css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    height: 200,
  },
];

const HomePageDetail = () => {
  console.log("data", data);
  const [open, set] = useState(false);
  const [hide, setHide] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
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
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        {open ? "" : <p onClick={() => setHide(true)}>Click to see Details</p>}
        {open &&
          data.map((style, item) => (
            <div data-content={style.name}>
              <animated.div
                className={styles.item}
                datatype={style.name}
                style={{
                  ...style,
                  background: style.css,
                }}
              />
              <p>{}</p>
            </div>
          ))}
      </animated.div>
    </div>
  );
};

export default HomePageDetail;
