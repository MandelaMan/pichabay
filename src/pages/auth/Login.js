import React, { useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../context/GlobalState";
import Footer from "../../components/layout/Footer";

const Login = () => {
  const { userLogin, isLoading, isLoggedIn } = useContext(GlobalContext);

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    userLogin(data);

    reset();
  };

  useEffect(() => {
    if (isLoggedIn) {
      reset();
    }
    return () => {
      //   cleanup
    };

    // eslint-disable-next-line
  }, [isLoading]);

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
                    <h3>Sign in to continue</h3>
                    <span>
                      Don't have an account?{" "}
                      <Link to="/create-account">Create Account</Link>
                    </span>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="utf-no-border">
                      <span className="err_msg">
                        {errors.email && errors.email.message}
                      </span>
                      <input
                        type="text"
                        className="utf-with-border"
                        name="email"
                        placeholder="Email address"
                        ref={register({
                          required: "Please enter email",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                    </div>
                    <div className="utf-no-border">
                      <span className="err_msg">
                        {errors.password && errors.password.message}
                      </span>
                      <input
                        type="password"
                        className="utf-with-border"
                        name="password"
                        placeholder="Password"
                        ref={register({
                          required: "Please enter password",
                        })}
                      />
                    </div>
                    {/* <div className="checkbox margin-top-0">
                      <input type="checkbox" id="two-step0" />
                      <label htmlFor="two-step0">
                        <span className="checkbox-icon"></span> I Have Read and
                        Agree to the <Link to="/">Terms &amp; Conditions</Link>
                      </label>
                    </div> */}
                    <button
                      className="button full-width utf-button-sliding-icon ripple-effect"
                      type="submit"
                    >
                      Log in <i className="icon-feather-chevron-right"></i>
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

export default Login;
