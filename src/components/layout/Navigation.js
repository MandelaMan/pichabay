import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import logo from "../../img/logo.png";
import { GlobalContext } from "../../context/GlobalState";
import me from "../../img/me.png";

const Navigation = () => {
  const node = useRef();

  const { isLoggedIn, user_info, logOutUser } = useContext(GlobalContext);

  const [menu, setMenu] = useState(null);

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

  const handleClick = (e) => {
    if (!node.current.contains(e.target)) {
      setMenu(null);
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };

    // eslint-disable-next-line
  }, []);

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
            <div className="utf-right-side">
              <div className="utf-header-widget-item">
                {!isLoggedIn ? (
                  <Link to="/login" className="log-in-button">
                    <i className="icon-feather-log-in"></i> <span>Log In</span>
                  </Link>
                ) : (
                  <div className="utf-header-notifications user-menu">
                    <div className="utf-header-notifications-trigger user-profile-title">
                      <Link to="/">
                        <div className="user-avatar status-online">
                          <img src={me} alt="" />
                        </div>
                        <div className="user-name">
                          Hi,&nbsp;{user_info.username}!
                        </div>
                      </Link>
                    </div>
                    <div className="utf-header-notifications-dropdown-block">
                      <ul className="utf-user-menu-dropdown-nav">
                        {user_info.account_type === 1 && (
                          <li>
                            <Link to="/">
                              <i className="icon-material-outline-dashboard"></i>
                              Dashboard
                            </Link>
                          </li>
                        )}
                        {user_info.account_type === 2 && (
                          <li>
                            <Link to="/">
                              <i className="icon-material-outline-dashboard"></i>
                              Dashboard
                            </Link>
                          </li>
                        )}
                        <li>
                          <Link to="/">
                            <i className="icon-feather-user"></i> Edit Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="" onClick={() => logOutUser()}>
                            <i className="icon-material-outline-power-settings-new"></i>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              {!menu ? (
                <span className="mmenu-trigger">
                  <button
                    className="hamburger utf-hamburger-collapse-item"
                    onClick={() => setMenu(!menu)}
                  >
                    <span className="utf-hamburger-box-item">
                      <span
                        className="utf-hamburger-inner-item"
                        style={{ marginTop: "-5px" }}
                      ></span>
                    </span>
                  </button>
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </header>
      <div ref={node}>
        {menu ? (
          <div className="mobile-menu">
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
          </div>
        ) : null}
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default Navigation;
