import React from "react";
import { Link } from "react-router-dom";
import FooterLinks from "../components/layout/FooterLinks";

const Faqs = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div id="titlebar" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Contact Us</h2>
              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>Contact Us</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="section gray padding-top-65 padding-bottom-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                <span>How It Works?</span>
                <h3>How It Works?</h3>
                <div className="utf-headline-display-inner-item">
                  How It Works?
                </div>
                <p className="utf-slogan-text">
                  Lorem Ipsum is simply dummy text printing and type setting
                  industry Lorem Ipsum been industry standard dummy text ever
                  since when unknown printer took a galley.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="icon-box with-line">
                <div className="utf-icon-box-circle">
                  <div className="utf-icon-box-circle-inner">
                    {" "}
                    <i className="icon-line-awesome-user-secret"></i>
                  </div>
                </div>
                <h3>User Register</h3>
                <p>
                  Lorem Ipsum is simply dummy text the printing and type setting
                  industry Lorem Ipsum has been industry.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="icon-box with-line">
                <div className="utf-icon-box-circle">
                  <div className="utf-icon-box-circle-inner">
                    {" "}
                    <i className="icon-line-awesome-user-plus"></i>
                  </div>
                </div>
                <h3>Create Account</h3>
                <p>
                  Lorem Ipsum is simply dummy text the printing and type setting
                  industry Lorem Ipsum has been industry.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="icon-box">
                <div className="utf-icon-box-circle">
                  <div className="utf-icon-box-circle-inner">
                    {" "}
                    <i className="icon-line-awesome-edit"></i>
                  </div>
                </div>
                <h3>Search Photographer</h3>
                <p>
                  Lorem Ipsum is simply dummy text the printing and type setting
                  industry Lorem Ipsum has been industry.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="icon-box">
                <div className="utf-icon-box-circle">
                  <div className="utf-icon-box-circle-inner">
                    {" "}
                    <i className="icon-line-awesome-save"></i>
                  </div>
                </div>
                <h3>Book & Pay</h3>
                <p>
                  Lorem Ipsum is simply dummy text the printing and type setting
                  industry Lorem Ipsum has been industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterLinks />
    </>
  );
};

export default Faqs;
