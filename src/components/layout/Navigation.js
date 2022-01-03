import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import logo from "../../img/logo.png";
import { GlobalContext } from "../../context/GlobalState";
import me from "../../img/me.png";

const Navigation = () => {
  const { isLoggedIn, user_info, logOutUser } = useContext(GlobalContext);
  // console.log(localStorage.hasOwnProperty("PLUD"));

  const history = createBrowserHistory();

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Book a Photographer",
      link: "/book-a-photographer",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <>
      <header id="utf-header-container-block">
        <div id="header">
          <div className="container">
            <div className="utf-left-side">
              <div id="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <nav id="navigation">
                <ul id="responsive">
                  {navItems.map((n, i) => (
                    <li key={i}>
                      <Link
                        className={`${
                          history.location.pathname === n.link ? "current" : ""
                        }`}
                        to={n.link}
                      >
                        {n.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="clearfix"></div>
            </div>
            <div class="utf-right-side">
              {/* <div class="utf-header-widget-item">
                <a
                  href="#utf-signin-dialog-block"
                  class="popup-with-zoom-anim log-in-button"
                >
                  <i class="icon-feather-log-in"></i> <span>Login</span>
                </a>{" "}
              </div> */}
              {/* <div class="utf-header-widget-item">
                <div class="utf-header-notifications user-menu">
                  <div class="utf-header-notifications-trigger user-profile-title">
                    <a href="#">
                      <div class="user-avatar status-online">
                        <img src="images/user_small_1.jpg" alt="" />{" "}
                      </div>
                      <div class="user-name">Hi, Sam!</div>
                    </a>
                  </div>
                  <div class="utf-header-notifications-dropdown-block">
                    <ul class="utf-user-menu-dropdown-nav">
                      <li>
                        <a href="#">
                          <i class="icon-material-outline-dashboard"></i>{" "}
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-line-awesome-user-secret"></i> Manage
                          Your Work
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-material-outline-group"></i> Work Done
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-material-outline-star-border"></i>{" "}
                          Bookmark Your Work
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-feather-user"></i> Edit Profile
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-material-outline-power-settings-new"></i>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <span class="mmenu-trigger">
                <button class="hamburger utf-hamburger-collapse-item">
                  <span class="utf-hamburger-box-item">
                    <span
                      class="utf-hamburger-inner-item"
                      style={{ marginTop: "-5px" }}
                    ></span>
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="mobile-menu">
        <ul>
          {navItems.map((n, i) => (
            <li key={i}>
              <Link
                className={`${
                  history.location.pathname === n.link ? "current" : ""
                }`}
                to={n.link}
              >
                {n.name}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="clearfix"></div>
    </>
  );
};

export default Navigation;
