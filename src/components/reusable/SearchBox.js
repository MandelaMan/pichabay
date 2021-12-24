import React, { useEffect, useState, useContext } from "react";
import { createBrowserHistory } from "history";
import { categories, counties } from "../../utils/data";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import $ from "jquery";
import moment from "moment";
import { countyName, categoryName } from "../../utils/helpers";

const SearchBox = () => {
  const { searchPhotographer, isLoading } = useContext(GlobalContext);

  const history = createBrowserHistory();

  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState(null);
  const [booked_on, setBookedOn] = useState(null);

  const updateLocalStorageItem = (name, value) => {
    let updated_search = {
      category: null,
      location: null,
      booked_on: null,
    };

    if (!localStorage.hasOwnProperty("_search")) {
      localStorage._search = JSON.stringify(updated_search);
    }

    const the_search = JSON.parse(localStorage._search);

    updated_search = { ...the_search, [name]: value };

    setCategory(updated_search.category);
    setLocation(updated_search.location);
    setBookedOn(updated_search.booked_on);

    localStorage._search = JSON.stringify(updated_search);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    searchPhotographer(data);
  };

  useEffect(() => {
    $("#dateplaceholder").change(function (evt) {
      var date = new Date($("#dateplaceholder").val());

      $("#dateplaceholder").attr("type", "text");

      $("#dateplaceholder").val(
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
      );
    });

    $("#dateplaceholder").focus(function (evt) {
      $("#dateplaceholder").attr("type", "date");

      setTimeout(function () {
        '$("#dateplaceholder").click();';
      }, 500);
    });

    $("#dateplaceholder").attr("type", "text");

    if (localStorage.hasOwnProperty("_search")) {
      const updated_search = JSON.parse(localStorage._search);

      setCategory(updated_search.category);
      setLocation(updated_search.location);
      setBookedOn(updated_search.booked_on);

      // if (
      //   !_.isNull(updated_search.category) &&
      //   !_.isNull(updated_search.location) &&
      //   !_.isNull(updated_search.booked_on)
      // ) {
      //   searchPhotographer(updated_search);
      // }
    }

    return () => {
      // cleanup;
    };
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="utf-intro-banner-search-form-block margin-top-50">
              <div className="utf-intro-search-field-item">
                <select
                  className="selectpicker default"
                  data-live-search="true"
                  data-selected-text-format="count"
                  data-size="5"
                  title={category ? categoryName(category) : "Select Category"}
                  name="category"
                  ref={register()}
                  onChange={(e) =>
                    updateLocalStorageItem(e.target.name, e.target.value)
                  }
                >
                  {categories.map((c, i) => (
                    <option
                      key={i}
                      value={c.id}
                      selected={c.id === category ? true : false}
                    >
                      {c.name} photographer
                    </option>
                  ))}
                </select>
              </div>
              <div className="utf-intro-search-field-item">
                <select
                  className="selectpicker default"
                  data-live-search="true"
                  data-selected-text-format="count"
                  data-size="5"
                  title={location ? countyName(location) : "Select Location"}
                  name="location"
                  ref={register()}
                  onChange={(e) =>
                    updateLocalStorageItem(e.target.name, e.target.value)
                  }
                >
                  {counties.map((c, i) => (
                    <option
                      key={i}
                      value={c.id}
                      selected={c.id === location ? true : false}
                    >
                      {c.name} County
                    </option>
                  ))}
                </select>
              </div>
              <div className="utf-intro-search-field-item">
                <input
                  type="date"
                  className="selectpicker default"
                  ref={register()}
                  min={<>{moment().add(-1).format("YYYY-MM-DD")}</>}
                  id="dateplaceholder"
                  name="booked_on"
                  placeholder={booked_on ? booked_on : "Book them on?"}
                  onChange={(e) =>
                    updateLocalStorageItem(e.target.name, e.target.value)
                  }
                />
              </div>
              <div className="utf-intro-search-button">
                <button className="button ripple-effect" type="submit">
                  <i className="icon-material-outline-search"></i>Search
                </button>
              </div>
            </div>
          </form>

          <p className="utf-trending-silver-item">
            <span className="utf-trending-black-item">
              Trending Keywords :&nbsp;
            </span>
            {categories.slice(0, 5).map((c, i) => (
              <Link to={`/category/${c.slug}`}>
                {c.name}
                {history.location.pathname !== "/" && <>,&nbsp;</>}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
