import React, { useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../context/GlobalState";
import Footer from "../../components/layout/Footer";

const Register = () => {
  const { userRegistration, isLoading, isLoggedIn } = useContext(GlobalContext);

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    userRegistration(data);

    reset();
  };

  if (isLoggedIn) {
    let to = "/";

    return <Redirect to={to} />;
  } else {
    return (
      <>
        <div className="login-signup-form">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="form-box">
                  <div className="utf-welcome-text-item">
                    <h3>Create account to continue</h3>
                    <span>
                      Already have an account? <Link to="/login">Sign in</Link>
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
                        name="username"
                        placeholder="Username"
                        ref={register({
                          required: "Please enter a username",
                          pattern: {
                            value: /^[^\s]+(?:$|.*[^\s]+$)/,
                            message: "Add a second name",
                          },
                        })}
                      />
                    </div>
                    <div className="utf-no-border">
                      <span className="err_msg">
                        {errors.email && errors.email.message}
                      </span>
                      <input
                        type="text"
                        className="utf-with-border"
                        name="email"
                        placeholder="Email Address"
                        ref={register({
                          required: "Please enter an email",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                    </div>
                    <div className="utf-no-border margin-bottom-20">
                      <span className="err_msg">
                        {errors.account_type && errors.account_type.message}
                      </span>
                      <select
                        className="selectpicker utf-with-border"
                        data-size="5"
                        title="How do you want to use Pichabay?"
                        name="account_type"
                        ref={register({
                          required: "Please choose one",
                        })}
                      >
                        <option value="1">To book a photographer</option>
                        {/* <option value="2">To sell my photography services</option> */}
                      </select>
                    </div>
                    <div
                      className="utf-no-border"
                      title="Should be at least 8 characters long"
                      data-tippy-placement="bottom"
                    >
                      <span className="err_msg">
                        {errors.password && errors.password.message}
                      </span>
                      <input
                        type="password"
                        className="utf-with-border"
                        name="password"
                        placeholder="Password"
                        ref={register({
                          required: "Please enter a password",
                        })}
                      />
                    </div>
                    <div className="utf-no-border">
                      <span className="err_msg">
                        {errors.conf_password && errors.conf_password.message}
                      </span>
                      <input
                        type="password"
                        className="utf-with-border"
                        name="conf_password"
                        placeholder="Repeat Password"
                        ref={register({
                          required: "Please confirm your password",
                        })}
                      />
                    </div>
                    <div className="checkbox margin-top-0">
                      <input type="checkbox" id="two-step0" />
                      <label htmlFor="two-step0">
                        <span className="checkbox-icon"></span> I Have Read and
                        Agree to the <Link to="/">Terms &amp; Conditions</Link>
                      </label>
                    </div>
                    <button
                      className="margin-top-10 button full-width utf-button-sliding-icon ripple-effect"
                      type="submit"
                    >
                      Register <i className="icon-feather-chevron-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-12"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Register;
