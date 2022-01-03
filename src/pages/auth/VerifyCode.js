import React, { useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../context/GlobalState";
import Footer from "../../components/layout/Footer";

const VerifyCode = () => {
  const { userRegistration, isLoading, isLoggedIn } = useContext(GlobalContext);

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    // userRegistration(data);

    console.log(data);

    reset();
  };

  return (
    <>
      <div className="login-signup-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="form-box">
                <div className="utf-welcome-text-item">
                  <h3>Email verification code</h3>
                  <span>
                    Please check your email for <b>5 digit code</b> in order to
                    verify your account.
                    <br /> The code expires in 15 min 00 sec
                  </span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="utf-no-border">
                    <span className="err_msg">
                      {errors.username && errors.username.message}
                    </span>
                    <input
                      type="text"
                      className="utf-with-border"
                      name="code"
                      placeholder="Enter code"
                      ref={register({
                        required: "Please enter code",
                        pattern: {
                          value: /^[^\s]+(?:$|.*[^\s]+$)/,
                          message: "No spaces",
                        },
                      })}
                    />
                  </div>
                  <button
                    className="margin-top-10 button full-width utf-button-sliding-icon ripple-effect"
                    type="submit"
                  >
                    Proceed to verify{" "}
                    <i className="icon-feather-chevron-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default VerifyCode;
