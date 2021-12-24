import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { GlobalContext } from "../../context/GlobalState";

const LoginSignupupPopup = () => {
  const { user_info } = useContext(GlobalContext);

  return (
    <>
      <div
        id="utf-signin-dialog-block"
        class="zoom-anim-dialog mfp-hide dialog-with-tabs"
      >
        <div class="utf-signin-form-part">
          <ul class="utf-popup-tabs-nav-item">
            <li>
              <a href="#login">Log In</a>
            </li>
            <li>
              <a href="#register">Register</a>
            </li>
          </ul>
          <div class="utf-popup-container-part-tabs">
            <div className="utf-popup-tab-content-item" id="login">
              <div className="utf-welcome-text-item">
                <h3>
                  Welcome Back Sign in to Continue{" "}
                  {user_info && user_info.username}
                </h3>
                <span>
                  Don't Have an Account?&nbsp;
                  <a href="#register" className="register-tab">
                    Sign Up!
                  </a>
                </span>
              </div>
              <Login />
            </div>
            <div className="utf-popup-tab-content-item" id="register">
              <div className="utf-welcome-text-item">
                <h3>Create your Account!</h3>
                <span>
                  Already have an Account?&nbsp;
                  <a href="#login" className="login-tab">
                    Log In!
                  </a>
                </span>
              </div>
              <Register />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupupPopup;
