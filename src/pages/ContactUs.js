import React from "react";
import { Link } from "react-router-dom";
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

      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="utf-contact-location-info-aera margin-bottom-50">
              <div id="utf-single-job-map-container-item">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.145692759573!2d36.639398923945386!3d-1.1076028699100442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f27cf31e4bdd9%3A0xad5afeba1b5d392!2sLimuru%20Town.!5e0!3m2!1sen!2ske!4v1637743009030!5m2!1sen!2ske"
                  width="100%"
                  height="450"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe> */}
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="utf-boxed-list-headline-item margin-bottom-35">
              <h3>
                <i class="icon-feather-map-pin"></i> Office Address
              </h3>
            </div>

            <div class="utf-contact-location-info-aera margin-bottom-50">
              <div class="contact-address">
                <ul>
                  <li>
                    <strong>Phone:-</strong> 0720 626 266
                  </li>
                  <li>
                    <strong>Website:-</strong>{" "}
                    <Link to="">www.pichabay.com</Link>
                  </li>
                  <li>
                    <strong>E-Mail:-</strong>{" "}
                    <Link to="">info@pichabay.com</Link>
                  </li>
                  <li>
                    <strong>Address:-</strong> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit Proin fermentum condimentum
                    mauris.
                  </li>
                </ul>
              </div>
            </div>

            <div class="utf-detail-social-sharing margin-top-15">
              <span>
                <strong>Social Sharing:-</strong>
              </span>
              <ul class="margin-top-15">
                <li>
                  <Link to="/" title="Facebook" data-tippy-placement="top">
                    <i class="icon-brand-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Twitter" data-tippy-placement="top">
                    <i class="icon-brand-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/" title="LinkedIn" data-tippy-placement="top">
                    <i class="icon-brand-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Google Plus" data-tippy-placement="top">
                    <i class="icon-brand-google"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Whatsapp" data-tippy-placement="top">
                    <i class="icon-brand-whatsapp"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-8 col-lg-8">
            <section id="contact" class="margin-bottom-50">
              <div class="utf-boxed-list-headline-item margin-bottom-35">
                <h3>
                  <i class="icon-material-outline-description"></i> Contact Form
                </h3>
              </div>
              <div class="utf-contact-form-item">
                <form method="post" name="contactform" id="contactform">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="utf-no-border">
                        <input
                          class="utf-with-border"
                          name="name"
                          type="text"
                          id="firstname"
                          placeholder="Frist Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="utf-no-border">
                        <input
                          class="utf-with-border"
                          name="name"
                          type="text"
                          id="lastname"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="utf-no-border">
                        <input
                          class="utf-with-border"
                          name="email"
                          type="email"
                          id="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="utf-no-border">
                        <input
                          class="utf-with-border"
                          name="subject"
                          type="text"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <textarea
                      class="utf-with-border"
                      name="comments"
                      cols="40"
                      rows="3"
                      id="comments"
                      placeholder="Message..."
                      required
                    ></textarea>
                  </div>
                  <div class="utf-centered-button margin-top-10">
                    <input
                      type="submit"
                      class="submit button"
                      id="submit"
                      value="Submit Message"
                    />
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
      <FooterLinks />
    </>
  );
};

export default ContactUs;
