import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import { GlobalContext } from "../context/GlobalState";

import { chosen_photographers, categories } from "../utils/data";
import SearchBox from "../components/reusable/SearchBox";
import OtherPhotographerLisiting from "../components/reusable/OtherPhotographerLisiting";

import home from "../img/home-background.jpg";

const Home = () => {
  const { photographers, user_info, home_photographers } =
    useContext(GlobalContext);

  useEffect(() => {
    return () => {
      //   cleanup;
    };
  }, []);

  return (
    <>
      {/* <Navigation /> */}

      <div className="intro-banner" data-background-image={home}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="utf-banner-headline-text-part">
                <h3>
                  Find a nearby&nbsp;
                  <span>
                    <Typed
                      strings={[
                        "Wedding",
                        "Baby",
                        "Family",
                        "Food",
                        "School",
                        "Event",
                      ]}
                      typeSpeed={80}
                      backSpeed={80}
                      backDelay={4000}
                      startDelay={1000}
                      loop={true}
                      showCursor={false}
                    ></Typed>
                  </span>
                  &nbsp;photographer.
                </h3>
                {/* <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam
                  cursus.
                </span> */}
              </div>
            </div>
          </div>
          <SearchBox categories={categories} />
        </div>
      </div>
      <div className="section gray padding-top-60 padding-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                <span>Latest Photographers</span>
                <h3>Photographers You May Be Interested</h3>
                <div className="utf-headline-display-inner-item">
                  Latest Photographers
                </div>
                <p className="utf-slogan-text">
                  Lorem Ipsum is simply dummy text printing and type setting
                  industry Lorem Ipsum been industry standard dummy text ever
                  since when unknown printer took a galley.
                </p>
              </div>
              <div className="utf-listings-container-part compact-list-layout margin-top-35">
                {home_photographers.map((p, i) => (
                  <OtherPhotographerLisiting key={i} p={p} />
                ))}
              </div>
              <div className="utf-centered-button margin-top-10">
                <Link
                  to="/book-a-photographer"
                  className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-20"
                >
                  Browse All Photographers
                  <i className="icon-feather-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section margin-top-60 margin-bottom-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
                <span>Photography Categories</span>
                <h3>Top Trending Categories</h3>
                {/* <div className="utf-headline-display-inner-item">
                  Jobs Categories
                </div> */}
                <p className="utf-slogan-text">
                  Lorem Ipsum is simply dummy text printing and type setting
                  industry Lorem Ipsum been industry standard dummy text ever
                  since when unknown printer took a galley.
                </p>
              </div>
            </div>
            {categories.map((c, i) => (
              <div className="col-xl-3 col-md-6 col-lg-4" key={i}>
                <Link
                  to="/"
                  className="photo-box photo-category-box small"
                  data-background-image="images/job-category-01.jpg"
                >
                  <div className="utf-opening-position-counter-item">
                    {c.popularity}&nbsp;photographers
                  </div>
                  <div className="utf-opening-box-content-part">
                    <div className="utf-category-box-icon-item">
                      <i className="icon-line-awesome-bullhorn"></i>{" "}
                    </div>
                    <h3>{c.name}</h3>
                    {/* <span>2,612 Jobs</span> */}
                  </div>
                </Link>
              </div>
            ))}
            <div className="col-xl-12 utf-centered-button margin-top-10">
              <Link
                to="/"
                className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0"
              >
                Choose more categories
                <i className="icon-feather-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="section padding-top-65 padding-bottom-75">
        <div className="container">
          <div className="col-xl-12">
            <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
              <span>Business Help Service</span>
              <h3>Need Any Help?</h3>
              <div className="utf-headline-display-inner-item">
                Business Help Service
              </div>
              <p className="utf-slogan-text">
                Lorem Ipsum is simply dummy text printing and type setting
                industry Lorem Ipsum been industry standard dummy text ever
                since when unknown printer took a galley.
              </p>
            </div>
          </div>
          <div className="row need-help-area justify-content-center">
            <div className="col-xl-4">
              <div className="info-box-1">
                <div className="utf-icon-box-circle">
                  <div className="utf-icon-box-circle-inner">
                    <i className="icon-brand-rocketchat"></i>
                  </div>
                </div>
                <h4>Chat to Us Online</h4>
                <p>Chat to us online if you have any question.</p>
                <Link
                  href="javascript:void(0);"
                  className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10"
                >
                  Click Here to Chat
                  <i className="icon-feather-chevrons-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="info-box-1">
                <div className="utf-icon-box-circle">
                  <div className="utf-icon-box-circle-inner">
                    <i className="icon-feather-phone"></i>
                  </div>
                </div>
                <h4>Our Support Agent</h4>
                <p>
                  Our support agent will work with you to meet your lending
                  needs.
                </p>
                <Link
                  to=""
                  className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10"
                >
                  Contact Us <i className="icon-feather-chevrons-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="info-box-1">
                <div className="utf-icon-box-circle">
                  <div className="utf-icon-box-circle-inner">
                    <i className="icon-brand-bimobject"></i>
                  </div>
                </div>
                <h4>Read Latest Blog Post</h4>
                <p>
                  Visit our Blog page and know more about news and career tips
                </p>
                <Link
                  to=""
                  className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10"
                >
                  Read Blog Post <i className="icon-feather-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
