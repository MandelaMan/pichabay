import React, { useEffect } from "react";
import $ from "jquery";

const Loader = () => {
  useEffect(() => {
    setTimeout(function () {
      $(".preloader").delay(300).fadeOut(700).addClass("loaded");
    }, 800);

    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <div className="preloader">
        <div className="utf-preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Loader;
