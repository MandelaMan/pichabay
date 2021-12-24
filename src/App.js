import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/layout/Footer";

import { GlobalProvider } from "./context/GlobalState";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

// import { ProtectedRoute } from "./components/ProtectedRoute";

import Home from "./pages/Home";
import PhotographerDetails from "./pages/PhotographerDetails";
import ScrollToTop from "./ScrollToTop";
import Photographers from "./pages/Photographers";
import PhotographerByCategory from "./pages/PhotographerByCategory";
import LoginSignupupPopup from "./components/authorization/LoginSignupPopup";
import Navigation from "./components/layout/Navigation";
import Loader from "./components/Loader";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <ScrollToTop />
        <Loader />
        <div id="wrapper">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route
              path="/photographer/:code/:name"
              // path="/photographer/:code/:name?"  optional parameter
              exact
              component={PhotographerDetails}
            />
            <Route path="/photographers" exact component={Photographers} />
            <Route
              path="/category/:category"
              exact
              component={PhotographerByCategory}
            />
            <Route
              path="/book-a-photographer"
              exact
              component={Photographers}
            />
          </Switch>
          <Footer />
        </div>
        <LoginSignupupPopup />
      </GlobalProvider>
    </>
  );
};

export default App;
