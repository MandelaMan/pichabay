import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import OtherPhotographerLisiting from "../components/reusable/OtherPhotographerLisiting";
import SearchBox from "../components/reusable/SearchBox";
import { chosen_photographers, categories } from "../utils/data";
import { GlobalContext } from "../context/GlobalState";
import _ from "lodash";
import Pagination from "../components/reusable/Pagination";
import InLoader from "../components/reusable/InLoaders";

const Photographers = () => {
  const { searched_photographers, searchPhotographer } =
    useContext(GlobalContext);

  useEffect(() => {
    if (localStorage.hasOwnProperty("_search")) {
      const the_search = JSON.parse(localStorage._search);

      if (
        !_.isNull(the_search.category) &&
        !_.isNull(the_search.location) &&
        !_.isNull(the_search.booked_on)
      ) {
        searchPhotographer(the_search);
      }
    }

    return () => {
      // cleanup
    };

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* <Navigation /> */}
      <div id="titlebar" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Results ({searched_photographers.length})</h2>
              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>Showing Photographers</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="inner_search_block_section padding-top-0 padding-bottom-40">
        <div className="container">
          <SearchBox categories={categories} />
        </div>
      </div>
      {/* {isLoading ? (
        <>
          <InLoader />
        </>
      ) : (
        <>Done loading</>
      )} */}
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="utf-notify-box-aera margin-top-10">
              <div className="utf-switch-container-item">
                <span>
                  Showing 1-10 of {searched_photographers.length} Photographer
                  Results :
                </span>
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
              {searched_photographers.map((p, i) => (
                <OtherPhotographerLisiting key={i} p={p} />
              ))}
            </div>
            <div className="clearfix"></div>
            <div className="row">
              <div className="col-md-12">
                <Pagination />
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Photographers;
