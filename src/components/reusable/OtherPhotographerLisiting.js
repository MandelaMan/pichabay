import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../img/company_logo_1.png";
import me from "../../img/me.png";
import { sanitizeBookName } from "../../utils/helpers";

const OtherPhotographerLisiting = ({ p }) => {
  return (
    <>
      <Link
        to={`/photographer/${p.code}/${sanitizeBookName(p.name)}`}
        className="utf-job-listing utf-apply-button-item"
      >
        <div className="utf-job-listing-details">
          <div className="utf-job-listing-company-logo">
            <img src={me} alt="" />{" "}
          </div>
          <div className="utf-job-listing-description">
            {/* <span className="dashboard-status-button utf-job-status-item green">
              <i className="icon-material-outline-business-center"></i> Full
              Time
            </span> */}
            <h3 className="utf-job-listing-title">{p.name}</h3>
            <div className="utf-job-listing-footer">
              <ul>
                <li>
                  <i className="icon-feather-briefcase"></i> {p.categories}
                </li>
                <li>
                  <i className="icon-material-outline-location-on"></i>{" "}
                  {p.location}
                </li>
              </ul>
            </div>
          </div>
          <span className="list-apply-button ripple-effect">
            Book Me<i className="icon-line-awesome-bullhorn"></i>
          </span>
        </div>
      </Link>
    </>
  );
};

export default OtherPhotographerLisiting;
