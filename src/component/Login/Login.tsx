import React, { use, useEffect, useState } from "react";
import "./login.css";
import Signup from "../Signup/Signup";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  // const router = useRouter();
  const [signUpDetails, setSignupDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [LoginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSignUpInput = (e: any) => {
    setSignupDetails({ ...signUpDetails, [e.target.name]: e.target.value });
  };
  const handleLoginInput = (e: any) => {
    setLoginDetails({ ...LoginDetails, [e.target.name]: e.target.value });
  };
  const handleSignUpCss = () => {
    function handle() {
      document.querySelector<any>(".cont").classList.toggle("s--signup");
    }

    handle();
  };

  useEffect(() => {
    if (
      (signUpDetails.username.length > 0 &&
        signUpDetails.password.length > 0 &&
        signUpDetails.email,
      length > 0)
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [signUpDetails]);

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/signup", signUpDetails);

      console.log("signup succcess", res.data);
    } catch (error: any) {
      toast.error(error.message);
      console.log("sgnup failed", error);
    }
  };
  const handleLogin = () => {};
  return (
    <div>
      <div className="cont">
        <div className="form sign-in">
          <h2>Welcome</h2>
          {/* <h3 style={{ color: "coral" }}>
            Please Login for better Experience !!
          </h3> */}
          <label>
            <span>Email</span>

            <input type="email" name="email" onChange={handleLoginInput} />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              onChange={handleLoginInput}
            />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button className="button submit" type="button" onClick={handleLogin}>
            Sign In
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>Don't have an account? Please Sign up!</h3>
            </div>
            <div className="img__text m--in">
              <h3>If you already has an account, just sign in.</h3>
            </div>
            <div className="img__btn" onClick={handleSignUpCss}>
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Create your Account</h2>
            {/* <Signup /> */}
            <label>
              <span>Name</span>
              <input type="text" name="username" onChange={handleSignUpInput} />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" onChange={handleSignUpInput} />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                onChange={handleSignUpInput}
              />
            </label>
            <button
              type="button"
              className="button submit"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
