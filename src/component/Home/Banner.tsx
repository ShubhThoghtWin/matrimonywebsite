import React from "react";

import HomePageDetail from "./HomePageDetail";
import styles from "./styles.module.css";

import {
  Box,
  Card,
  CardContent,
  Container,
  Icon,
  Typography,
} from "@mui/material";
const detail = [
  {
    feature: "Advanced Search Filters",
    description: "Narrow down your search using various criteria.",
    icon: "🔍",
  },

  {
    feature: "Compatibility Tools",
    description: "Assess compatibility with potential partners.",
    icon: "💞",
  },

  {
    feature: "Verified Profiles",
    description: "Profiles are thoroughly verified for authenticity.",
    icon: "✅",
  },
  {
    feature: "Easy Communication",
    description: "Connect and interact with potential matches easily.",
    icon: "📞",
  },
  {
    feature: "24/7 Support",
    description: "Get round-the-clock assistance and support.",

    icon: "🕰️",
  },
];

const Banner = () => {
  return (
    <>
      <Box className={styles.banner_bg}>
        <Container>
          <p className={styles.text}>
            Find your life partner with our trusted and reliable matrimonial
            platform. Join us today and embark on a journey to find your perfect
            match!
          </p>
          <Box id="one">
            <Box>
              <button className={styles.button30} role="button">
                Let Start your journey with us...
              </button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className={styles.descriptionDiv}>
        <Box className={styles.Detail_description}>
          {detail.map((item, index) => (
            <Box>
              <Card className={styles.cardDetail}>
                {/* <Icon className={styles.icon}>{item.icon}</Icon> */}
                <CardContent>
                  <img
                    src={
                      "https://i.pinimg.com/564x/a9/72/0a/a9720ae02302e88a923fd1a7e915e5f3.jpg"
                    }
                    alt="f"
                    width="180px"
                  ></img>
                  {/* <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  >
                  {item.feature}
                  </Typography>
                  <Typography variant="h5" component="div">
                  {item.description}
                </Typography>
                <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                ></Typography> */}
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
      <Box id="one" style={{ bottom: 0 }}>
        <HomePageDetail />
      </Box>
    </>
  );
};

export default Banner;
