import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { chosen_photographers, photographer } from "../utils/data";
import OtherPhotographerLisiting from "../components/reusable/OtherPhotographerLisiting";
import single_job from "../img/bg_user.jpg";
import company_logo from "../img/company_logo_1.png";
import { Carousel } from "react-carousel-minimal";
import me from "../img/me.png";
import { GlobalContext } from "../context/GlobalState";
import PhotographerNotFound from "../components/reusable/PhotographerNotFound";

const PhotographerDetails = (props) => {
  const { photographers } = useContext(GlobalContext);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    setDetails(photographer);

    return () => {
      // cleanup;
    };
  }, []);

  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      // caption: "Darjeeling",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="single-page-header" data-background-image={single_job}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="utf-single-page-header-inner-aera">
                <div class="utf-left-side">
                  <div className="utf-header-image">
                    <Link to="/">
                      <img src={me} alt="" />
                    </Link>
                  </div>
                  <div class="utf-header-details">
                    <h3>
                      {details.name}
                      <span
                        className="utf-verified-badge"
                        title="Verified"
                        data-tippy-placement="top"
                      ></span>
                    </h3>
                    <ul>
                      <li>{details.location}</li>
                    </ul>
                    <h5>
                      <i className="icon-material-outline-business-center"></i>
                      &nbsp;
                      {details.categories}
                    </h5>
                    &nbsp;
                    <span className="dashboard-status-button utf-job-status-item green">
                      <i className="icon-material-outline-business-center"></i>
                      &nbsp;Full Time
                    </span>
                  </div>
                </div>
                <div class="utf-right-side">
                  <div class="salary-box">
                    <Link to="#" class="button apply-now-button margin-top-0">
                      Book&nbsp;{details.name}
                      <i class="icon-feather-chevron-right"></i>
                    </Link>
                    {/* <a href="#" class="button save-job-btn margin-top-20">
                      Book Sam <i class="icon-feather-chevron-right"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 utf-content-right-offset-aera">
            <div className="utf-single-page-section-aera">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-material-outline-description"></i>{" "}
                  Description
                </h3>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of printing and type setting
                industry. Lorem Ipsum been industry standard dummy text ever
                since, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <ul className="utf-job-deatails-content-item margin-bottom-30">
                <li>
                  <i className="icon-feather-arrow-right"></i> Morbi mattis
                  ullamcorper velit. Phasellus gravida semper nisi nullam vel
                  sem.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Etiam ultricies
                  nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
                  dui. Etiam rhoncus.
                </li>
                <li>
                  <i className="icon-feather-arrow-right"></i> Donec mollis
                  hendrerit risus. Phasellus nec sem in justo pellentesque
                  facilisis.
                </li>
              </ul>
              <div className="job-description-image-aera">
                <Carousel
                  data={data}
                  time={2000}
                  width="100%"
                  height="300px"
                  captionStyle={captionStyle}
                  radius="5px"
                  slideNumber={false}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={false}
                  dots={false}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: "center",
                    maxWidth: "100%",
                    maxHeight: "400px",
                    margin: "40px auto",
                    overflowY: "hidden",
                    overflowX: "hidden !important",
                    cursor: "pointer",
                  }}
                />
              </div>
              {/* <div className="clearfix"></div> */}
            </div>
            <div className="utf-boxed-list-item margin-bottom-60">
              <div className="utf-boxed-list-headline-item">
                <h3>
                  <i className="icon-material-outline-business-center"></i>{" "}
                  Available Photographers Also
                </h3>
              </div>
              <div className="utf-listings-container-part compact-list-layout">
                {photographers.slice(0, 6).map((p, i) => (
                  <OtherPhotographerLisiting key={i} p={p} />
                ))}
              </div>
              <div className="utf-centered-button margin-top-10">
                <Link
                  to="/photographers"
                  className="button utf-button-sliding-icon"
                >
                  View More Photographers{" "}
                  <i className="icon-feather-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="utf-sidebar-container-aera">
              <div className="utf-sidebar-widget-item">
                <h3>Price</h3>
                <div className="utf-right-side">
                  <div className="salary-box">
                    <div className="salary-amount">
                      KES {details.rate_min} - KES {details.rate_max}
                    </div>
                  </div>
                </div>
              </div>
              <div className="utf-sidebar-widget-item">
                <h3>Additional Packages</h3>
                <div className="utf-radio-btn-list">
                  {photographer.additional_packages.map((p, i) => (
                    <div className="checkbox">
                      <input type="checkbox" id={`chekcbox00${i}`} />
                      <label for={`chekcbox00${i}`}>
                        <span className="checkbox-icon"></span>
                        {p.desc}&nbsp;
                        <br />
                        {p.price}&nbsp;
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="utf-sidebar-widget-item">
                <form method="post" name="contactform" id="contact">
                  <div className="utf-centered-button margin-top-10">
                    <Link className="apply-now-button popup-with-zoom-anim margin-top-0">
                      Book&nbsp;{details.name}
                      <i className="icon-feather-chevron-right"></i>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="utf-sidebar-widget-item">
                <h3>Working Hours</h3>
                <div className="utf-tags-container-item">
                  {photographer.workdays.map((w, i) => (
                    <div className="tag" key={i}>
                      {/* <input type="checkbox" id="tag4" /> */}
                      <label for="tag4">
                        {w.day}&nbsp;:&nbsp;{w.time}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="utf-sidebar-widget-item">
                <h3>Bookmark This Photographer</h3>
                <p className="bookmark-text-item">
                  35 People Bookmarked This Photographer
                </p>
                <button className="bookmark-button margin-bottom-10">
                  {" "}
                  <span className="bookmark-icon"></span>{" "}
                  <span className="bookmark-text">
                    Login to Bookmark This Photographer
                  </span>{" "}
                  <span className="bookmarked-text">
                    Login to Bookmark This Photographer
                  </span>{" "}
                </button>
              </div>

              <div className="utf-sidebar-widget-item">
                <div className="utf-job-overview">
                  <div className="utf-job-overview-headline">
                    More Information
                  </div>
                  <div className="utf-job-overview-inner">
                    <ul>
                      <li>
                        <i className="icon-material-outline-business-center"></i>{" "}
                        <span>Category:</span>
                        <h5>General, Weddings, Pets, Food</h5>
                      </li>

                      <li>
                        <i className="icon-line-awesome-glass"></i>{" "}
                        <span>Experience</span>
                        <h5>6 Years</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-location-on"></i>{" "}
                        <span>Location</span>
                        <h5>Westlands, Nairobi</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-business-center"></i>{" "}
                        <span>Jobs Type</span>
                        <h5>Full Time</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotographerDetails;
