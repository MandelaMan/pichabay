import React from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import FooterLinks from "../components/layout/FooterLinks";
import Footer from "../components/layout/Footer";
const AboutUs = () => {
  return (
    <>
      <Loader />
      <div id="titlebar" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>About Us</h2>
              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Pages</Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="section margin-top-65 padding-bottom-55">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <p>
                Pichabay.com is the largest online marketplace for scheduled
                photography services. We partner with thousands of photographers
                and photography companies to bring you photography services at a
                great price for any need or occasion. Our photographers and
                photography companies compete to win your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section gray padding-top-65 padding-bottom-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                <span>Business Support Service</span>
                <h3>How It Works?</h3>
                <div className="utf-headline-display-inner-item">
                  Business Support Service
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
                <h3>Save & Apply</h3>
                <p>
                  Lorem Ipsum is simply dummy text the printing and type setting
                  industry Lorem Ipsum has been industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section padding-top-60 padding-bottom-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                <span>Popular Companies</span>
                <h3>Our Best Partners</h3>
                <div className="utf-headline-display-inner-item">
                  Popular Companies
                </div>
                <p className="utf-slogan-text">
                  Lorem Ipsum is simply dummy text printing and type setting
                  industry Lorem Ipsum been industry standard dummy text ever
                  since when unknown printer took a galley.
                </p>
              </div>
              <div className="col-md-12">
                <div className="utf-logo-carousel-block">
                  <div className="utf-carousel-logo-item">
                    <Link to="">
                      <img src="images/brand_logo_01.png" alt="" />
                    </Link>
                  </div>
                  <div className="utf-carousel-logo-item">
                    {" "}
                    <Link to="">
                      <img src="images/brand_logo_01.png" alt="" />
                    </Link>
                  </div>
                  <div className="utf-carousel-logo-item">
                    {" "}
                    <Link to="">
                      <img src="images/brand_logo_01.png" alt="" />
                    </Link>
                  </div>
                  <div className="utf-carousel-logo-item">
                    {" "}
                    <Link to="">
                      <img src="images/brand_logo_01.png" alt="" />
                    </Link>
                  </div>
                  <div className="utf-carousel-logo-item">
                    {" "}
                    <Link to="">
                      <img src="images/brand_logo_01.png" alt="" />
                    </Link>
                  </div>
                  <div className="utf-carousel-logo-item">
                    {" "}
                    <Link to="">
                      <img src="images/brand_logo_01.png" alt="" />
                    </Link>
                  </div>
                  <div className="utf-carousel-logo-item">
                    {" "}
                    <Link to="">
                      <img src="images/brand_logo_01.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLinks />
      <Footer />
    </>
  );
};

export default AboutUs;
