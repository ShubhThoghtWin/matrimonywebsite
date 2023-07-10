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
import React from "react";

interface Step {
  label: string;
  description: { id: string; name: string }[];
}

const steps: Step[] = [
  {
    label: "Creating Profile for ",
    description: [
      {
        id: "1",
        name: "son",
      },
      {
        id: "2",
        name: "daughter",
      },
      {
        id: "3",
        name: "brother",
      },
      { id: "4", name: "sister" },
    ],
  },
];
const Signup = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
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
            display: "flex",
            flexFlow: "row",
          }}
        >
          {steps[activeStep].description.map((item) => {
            return (
              <Box>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  // value={value}
                  // onChange={handleChange}
                >
                  <Box>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label={item.name}
                    />
                  </Box>
                </RadioGroup>
              </Box>
            );
          })}
        </Box>
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
    </>
  );
};

export default Signup;
