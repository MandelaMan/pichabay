import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <>
      <div id="footer">
        <div className="utf-footer-section-item-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-12">
                <div className="utf-footer-item-links">
                  <h3>About</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of printing and type
                    setting industry. Lorem Ipsum been industry standard dummy
                    text ever since, when unknown printer took a galley type
                    scrambled. Lorem Ipsum is simply dummy text of printing and
                    type setting industry.
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Title</h3>
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Title</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Title</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Title</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Title</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Title</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Title</h3>
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Title</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Title</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Title</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Title</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Title</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Resources</h3>
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>My Account</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Support</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>How It Works</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Login</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Book Photographer</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>FAQs</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Contact Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Privacy Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-feather-chevron-right"></i>{" "}
                        <span>Term & Condition</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
