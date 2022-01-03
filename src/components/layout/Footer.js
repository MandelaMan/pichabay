import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="utf-footer-copyright-item">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              &copy; Pichabay 2021. All Rights Reserved. Powered by{" "}
              <font color="red">
                <Link to="">Zamoya</Link>
              </font>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
