"use client";
import { Avatar, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "../userprofile.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

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
        name: "Firstname",
        type: "text",
      },
      {
        id: "2",
        name: "Lastname",
        type: "text",
      },
      {
        id: "3",
        name: "Date of Birth",
        type: "date",
      },
      {
        id: "4",
        name: "Birthtime",
        type: "time",
      },
      {
        id: "5",
        name: "Birthplace",
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
        name: "Mobilenumber",
        type: "number",
      },
      {
        id: "5",
        name: "Hobbies",
        type: "text",
      },
    ],
  },
  {
    label: " Upload Profile Photo ",
    description: [
      {
        id: "1",
        name: "Upload Photo",
        type: "file",
      },
    ],
  },
];

const UserProfile = () => {
  const formik = useFormik({
    initialValues: {
      Fullname: "",
      Lastname: "",
      ProfileCreatedfor: "",
      Birthtime: "",
      Birthplace: "",
      Dateofbirth: "",
      Religion: "",
      Caste: "",
      MobileNumber: "",
      Hobbies: "",
      Address: "",
    },
    validationSchema: Yup.object({
      Fullname: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      Lastname: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      ProfileCreatedfor: Yup.string().required("Required!"),
      Birthtime: Yup.string().required("Required!"),
      Birthplace: Yup.string().required("Required!"),
      Dateofbirth: Yup.string().required("Required!"),
      Religion: Yup.string().required("Required!"),
      Caste: Yup.string().required("Required!"),
      MobileNumber: Yup.string().required("Required!"),
      Hobbies: Yup.string().required("Required!"),
      Address: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 25 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
                      name={item.name}
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
                      name={item.name}
                    />
                  </Box>
                ) : activeStep === 3 ? (
                  <Box>
                    <Box className={styles.profilePic}>
                      <Avatar
                        className={styles.profiledp}
                        sx={{ width: "100px", height: "100px" }}
                      >
                        {/* <Image src={}></Image> */}
                      </Avatar>
                      <TextField
                        className={styles.profileupload}
                        id="outlined-password-input"
                        // label={item.name}
                        type={item.type}
                        autoComplete="current-password"
                        name={item.name}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      value={gender}
                      onChange={handlePersona}
                      name={item.name}
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
                activeStep === 3 ? (
                  <Link href="/userprofile">
                    <Button size="small">Submit</Button>
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
