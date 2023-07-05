import React from "react";

const login = () => {
  const handleSignUpCss = () => {
    function handle() {
      document.querySelector(".cont").classList.toggle("s--signup");
    }

    handle();
  };
  return (
    <div>
      <div className="cont">
        <div className="form sign-in">
          <h2>Welcome</h2>
          <h3 style={{ color: "coral" }}>
            Please Login for better Experience !!
          </h3>
          <label>
            <span>Email</span>

            <input type="email" name="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button
            className="button submit"
            type="button"
            onClick={handleSignUpCss}
          >
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
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Create your Account</h2>
            <label>
              <span>Name</span>
              <input type="text" name="name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" />
            </label>
            <button type="button" className="button submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
