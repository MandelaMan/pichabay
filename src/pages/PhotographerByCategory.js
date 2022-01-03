import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OtherPhotographerLisiting from "../components/reusable/OtherPhotographerLisiting";
import { categories } from "../utils/data";
import { GlobalContext } from "../context/GlobalState";
import FooterLinks from "../components/layout/FooterLinks";
import Footer from "../components/layout/Footer";

const Photographers = () => {
  const { photographers } = useContext(GlobalContext);

  return (
    <>
      {/* <Navigation /> */}
      <div id="titlebar" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Category Name (45)</h2>
              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>Search for A Photographer</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="utf-sidebar-container-aera">
              <div className="utf-sidebar-widget-item">
                <div className="utf-detail-banner-add-section">
                  <Link to="/">
                    <img src="images/banner-add-2.jpg" alt="banner-add-2" />
                  </Link>
                </div>
              </div>
              <div className="utf-sidebar-widget-item">
                <h3>Category</h3>
                <select
                  className="selectpicker"
                  data-live-search="true"
                  data-selected-text-format="count"
                  data-size="7"
                  title="All Categories"
                >
                  {categories.map((c, i) => (
                    <option key={i} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="utf-sidebar-widget-item">
                <h3>Photographer Type</h3>
                <div className="utf-radio-btn-list">
                  <div className="checkbox">
                    <input type="checkbox" id="chekcbox1" checked />
                    <label for="chekcbox1">
                      <span className="checkbox-icon"></span> Full Time
                    </label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" id="chekcbox2" />
                    <label for="chekcbox2">
                      <span className="checkbox-icon"></span> Part Time
                    </label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" id="chekcbox3" />
                    <label for="chekcbox3">
                      <span className="checkbox-icon"></span> Freelancer
                    </label>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="utf-sidebar-widget-item">
                <h3>Select Date</h3>
                <div className="margin-top-25"></div>
                <input type="date" name="Book Photographer" required />
              </div>

              <div className="utf-sidebar-widget-item">
                <div className="utf-detail-banner-add-section">
                  <Link to="/">
                    <img src="images/banner-add-2.jpg" alt="banner-add-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="utf-notify-box-aera margin-top-10">
              <div className="utf-switch-container-item">
                <span>Showing 1-10 of 50 Photographer Results :</span>
              </div>
              <div className="sort-by">
                <span>Sort By:</span>
                <select className="selectpicker hide-tick">
                  <option>A to Z</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Random</option>
                </select>
              </div>
            </div>
            <div className="utf-listings-container-part compact-list-layout margin-top-35">
              {photographers.map((p, i) => (
                <OtherPhotographerLisiting key={i} p={p} />
              ))}
            </div>
            <div className="clearfix"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="utf-pagination-container-aera margin-top-30 margin-bottom-60">
                  <nav className="pagination">
                    <ul>
                      <li className="utf-pagination-arrow">
                        <Link to="/">
                          <i className="icon-material-outline-keyboard-arrow-left"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="current-page">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link to="/">2</Link>
                      </li>
                      <li>
                        <Link to="/">3</Link>
                      </li>
                      <li className="utf-pagination-arrow">
                        <Link to="/">
                          <i className="icon-material-outline-keyboard-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
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

export default Photographers;
