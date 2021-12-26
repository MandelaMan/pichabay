import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import OtherPhotographerLisiting from "../components/reusable/OtherPhotographerLisiting";
import SearchBox from "../components/reusable/SearchBox";
import { chosen_photographers, categories } from "../utils/data";
import { GlobalContext } from "../context/GlobalState";
import FooterLinks from "../components/layout/FooterLinks";

const Photographers = () => {
  const { photographers } = useContext(GlobalContext);

  return (
    <>
      {/* <Navigation /> */}
      <div id="titlebar" class="gradient">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
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
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-4">
            <div class="utf-sidebar-container-aera">
              <div class="utf-sidebar-widget-item">
                <div class="utf-detail-banner-add-section">
                  <a href="#">
                    <img src="images/banner-add-2.jpg" alt="banner-add-2" />
                  </a>
                </div>
              </div>
              <div class="utf-sidebar-widget-item">
                <h3>Category</h3>
                <select
                  class="selectpicker"
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

              <div class="utf-sidebar-widget-item">
                <h3>Photographer Type</h3>
                <div class="utf-radio-btn-list">
                  <div class="checkbox">
                    <input type="checkbox" id="chekcbox1" checked />
                    <label for="chekcbox1">
                      <span class="checkbox-icon"></span> Full Time
                    </label>
                  </div>
                  <div class="checkbox">
                    <input type="checkbox" id="chekcbox2" />
                    <label for="chekcbox2">
                      <span class="checkbox-icon"></span> Part Time
                    </label>
                  </div>
                  <div class="checkbox">
                    <input type="checkbox" id="chekcbox3" />
                    <label for="chekcbox3">
                      <span class="checkbox-icon"></span> Freelancer
                    </label>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="utf-sidebar-widget-item">
                <h3>Select Date</h3>
                <div class="margin-top-25"></div>
                <input type="date" name="Book Photographer" required />
              </div>

              <div class="utf-sidebar-widget-item">
                <div class="utf-detail-banner-add-section">
                  <a href="#">
                    <img src="images/banner-add-2.jpg" alt="banner-add-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-8">
            <div class="utf-notify-box-aera margin-top-10">
              <div class="utf-switch-container-item">
                <span>Showing 1-10 of 50 Photographer Results :</span>
              </div>
              <div class="sort-by">
                <span>Sort By:</span>
                <select class="selectpicker hide-tick">
                  <option>A to Z</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Random</option>
                </select>
              </div>
            </div>
            <div class="utf-listings-container-part compact-list-layout margin-top-35">
              {photographers.map((p, i) => (
                <OtherPhotographerLisiting key={i} p={p} />
              ))}
            </div>
            <div class="clearfix"></div>
            <div class="row">
              <div class="col-md-12">
                <div class="utf-pagination-container-aera margin-top-30 margin-bottom-60">
                  <nav class="pagination">
                    <ul>
                      <li class="utf-pagination-arrow">
                        <a href="#">
                          <i class="icon-material-outline-keyboard-arrow-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="current-page">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li class="utf-pagination-arrow">
                        <a href="#">
                          <i class="icon-material-outline-keyboard-arrow-right"></i>
                        </a>
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
    </>
  );
};

export default Photographers;
