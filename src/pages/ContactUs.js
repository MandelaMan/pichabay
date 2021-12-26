import React from "react";
import Navigation from "../components/layout/Navigation";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import FooterLinks from "../components/layout/FooterLinks";

const ContactUs = () => {
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
      <FooterLinks />
    </>
  );
};

export default ContactUs;
