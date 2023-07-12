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
import Link from "next/link";

interface Step {
  label: string;
  description: { id: string; name: string; type: string }[];
}

const steps: Step[] = [
  {
    label: "Profile Creating for ",
    description: [
      {
        id: "1",
        name: "My Son",
        type: "checkbox",
      },
      {
        id: "2",
        name: "My Daughter",
        type: "checkbox",
      },
      {
        id: "3",
        name: "My Brother",
        type: "checkbox",
      },
      { id: " 7", name: "My Sister", type: "checkbox" },
      { id: "4", name: "My Self", type: "checkbox" },
      { id: "5", name: "My Friend", type: "checkbox" },
      { id: " 6", name: "My Relative", type: "checkbox" },
    ],
  },
  {
    label: "Profile  Details: ",
    description: [
      {
        id: "1",
        name: "First Name",
        type: "text",
      },
      {
        id: "2",
        name: "Last Name",
        type: "text",
      },
      {
        id: "3",
        name: "Date of Birth",
        type: "date",
      },
      {
        id: "4",
        name: "BirthTime",
        type: "time",
      },
      {
        id: "5",
        name: "Birth Place",
        type: "text",
      },
    ],
  },

  {
    label: "Profile  Details: ",
    description: [
      {
        id: "1",
        name: "Religion",
        type: "text",
      },
      {
        id: "2",
        name: "Caste",
        type: "text",
      },
      {
        id: "3",
        name: "Address",
        type: "text",
      },
      {
        id: "4",
        name: "Mobile Number",
        type: "number",
      },
      {
        id: "5",
        name: "Hobbies",
        type: "text",
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

  const handleSubmit = () => {};

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
                display: activeStep === 1 || 2 ? "grid" : "flex",
                flexFlow: activeStep === 1 || 2 ? "column" : "row",
                gridTemplateColumns:
                  activeStep === 1 || 2 ? "300px 300px 300px" : "",
                gap: "10px",
              }}
            >
              {steps[activeStep].description.map((item) => {
                return activeStep === 1 ? (
                  <Box>
                    <TextField
                      id="outlined-password-input"
                      label={item.name}
                      type={item.type}
                      autoComplete="current-password"
                    />
                  </Box>
                ) : activeStep === 2 ? (
                  <Box>
                    <TextField
                      id="outlined-password-input"
                      label={item.name}
                      type={item.type}
                      autoComplete="current-password"
                    />
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
                activeStep === 2 ? (
                  <Link href="/userprofile">
                    <Button size="small" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Link>
                ) : (
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    {activeStep == 2} Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                )
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
