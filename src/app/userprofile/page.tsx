"use client";
import { Container, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./userprofile.module.css";

import { useTheme } from "@mui/material/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControlLabel,
  MobileStepper,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

interface Step {
  label: string;
  description: { id: string; name: string }[];
}

const steps: Step[] = [
  {
    label: "Profile Creating for ",
    description: [
      {
        id: "1",
        name: "My Son",
      },
      {
        id: "2",
        name: "My Daughter",
      },
      {
        id: "3",
        name: "My Brother",
      },
      { id: " 7", name: "My Sister" },
      { id: "4", name: "My Self" },
      { id: "5", name: "My Friend" },
      { id: " 6", name: "My Relative" },
    ],
  },
  {
    label: "Profile  Details: ",
    description: [
      {
        id: "1",
        name: "First Name",
      },
      {
        id: "2",
        name: "Last Name",
      },
      {
        id: "3",
        name: "Date of Birth",
      },
      {
        id: "4",
        name: "BirthTime",
      },
      {
        id: "5",
        name: "Birth Place",
      },
    ],
  },
];

const UserProfile = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  console.log("dsdsd", activeStep);

  const [gender, setGender] = useState("");
  const [genderSelect, setGenderSelect] = useState(false);

  console.log(gender);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const items = [];

  for (let i = 1; i <= 9; i++) {
    items.push(<li key={i}></li>);
  }

  const handlePersona = (e: any) => {
    setGender(e.target.value);
    console.log("---------", e.target.value);

    if (
      e.target.value === "My Self" ||
      e.target.value === "My Friend" ||
      e.target.value === "My Relative"
    ) {
      setGenderSelect(true);
    } else {
      setGenderSelect(false);
    }
  };

  return (
    <>
      <div className={styles.area}>
        <ul className={styles.circles}>{items}</ul>
        <Container className={styles.userprofile_container}>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box
              sx={{
                height: 255,
                maxWidth: 400,
                width: "100%",
                p: 2,
                display: activeStep === 1 ? "grid" : "flex",
                flexFlow: activeStep === 1 ? "column" : "row",
                gridTemplateColumns:
                  activeStep === 1 ? "300px 300px 300px" : "",
                gap: "10px",
              }}
            >
              {steps[activeStep].description.map((item) => {
                return activeStep === 1 ? (
                  <Box
                    key={item.id}
                    sx={{ display: "flex", flexFlow: "column" }}
                  >
                    {item.name == "Date of Birth" ? (
                      <TextField
                        id="outlined-password-input"
                        // label={""}
                        type="date"
                        autoComplete="current-password"
                      />
                    ) : (
                      <TextField
                        id="outlined-password-input"
                        label={item.name}
                        type="text"
                        autoComplete="current-password"
                      />
                    )}
                  </Box>
                ) : (
                  <Box>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={gender}
                      onChange={handlePersona}
                    >
                      <Box className={styles.radioButton}>
                        <FormControlLabel
                          value={item.name}
                          control={<Radio />}
                          label={item.name}
                        />
                      </Box>
                    </RadioGroup>
                  </Box>
                );
              })}
            </Box>
            {genderSelect && activeStep == 0 && (
              <Box>
                <RadioGroup
                  sx={{ width: "50%", margin: "-5%  auto" }}
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <Typography>Please Select Gender</Typography>
                  <Box className={styles.radioButton}>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </Box>
                </RadioGroup>
              </Box>
            )}
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Container>
      </div>
    </>
  );
};

export default UserProfile;
