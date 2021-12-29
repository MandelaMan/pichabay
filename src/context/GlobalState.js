import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import {
  encryptData,
  decryptData,
  readJwt,
  baseURL,
  addCookie,
  deleteCookie,
} from "../utils/helpers";
import Cookies from "js-cookie";
import { photographers } from "../utils/data";
import { createBrowserHistory } from "history";

const initialState = {
  isLoading: false,
  isLoggedIn: null,
  categories: [],
  counties: [],
  home_photographers: [],
  searched_photographers: [],
  photographers: [],
  user_info: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const history = createBrowserHistory();

  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function fetchCategories() {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get(`${baseURL}/categories`, config);

      if (res.data) {
        dispatch({
          type: "GET_CATEGORIES",
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fetchPhotographers() {
    dispatch({
      type: "GET_PHOTOGRAPHERS",
      payload: photographers,
    });
  }

  function setLoadingStatus(action) {
    dispatch({
      type: "SET_LOADING_STATUS",
      payload: action,
    });
  }

  function setGlobalInfo(info) {
    dispatch({
      type: "SET_USER_INFO",
      payload: info,
    });
  }

  function checkLoginStatus() {
    let login = false;

    if (localStorage.PLUD) {
      const info = readJwt(decryptData(localStorage.PLUD));
      login = true;
      setGlobalInfo(info);
    }
    dispatch({
      type: "LOGIN_STATUS",
      payload: login,
    });
  }

  async function userLogin(inputs) {
    setLoadingStatus(true);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`${baseURL}/users/login`, inputs, config);

      if (!res.data.error) {
        localStorage.PLUD = encryptData(res.data.token);

        setTimeout(function () {
          checkLoginStatus();

          setLoadingStatus(false);

          history.push("/");
          window.location.reload();
        }, 200);
      }
    } catch (error) {}
  }

  async function userRegistration(inputs) {
    setLoadingStatus(true);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`${baseURL}/users/register`, inputs, config);

      if (!res.data.error) {
        localStorage.PLUD = encryptData(res.data.token);

        setTimeout(function () {
          checkLoginStatus();

          setLoadingStatus(false);

          // history.push("/create-account");
          // window.location.reload();
        }, 500);
      }
    } catch (error) {}
  }

  async function logOutUser() {
    try {
      localStorage.removeItem("PLUD");
      window.location.reload();

      const info = {};

      setGlobalInfo(info);

      setTimeout(function () {
        checkLoginStatus();
      }, 200);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function searchPhotographer(data) {
    setLoadingStatus(true);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get(
        `${baseURL}/search?category=${data.category}&location=${data.location}&booked_on=${data.booked_on}`,
        config
      );

      if (res) {
        dispatch({
          type: "GET_SEARCHED_PHOTOGRAPHERS",
          payload: res.data,
        });

        setTimeout(function () {
          if (history.location.pathname === "/") {
            history.push("/book-a-photographer");
            window.location.reload();
          }

          setLoadingStatus(false);
        }, 1000);
      }
    } catch (error) {
      // console.log(error.message);
    }
  }

  async function fetchHomePhotographer() {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get(`${baseURL}/photographers`, config);

      dispatch({
        type: "GET_HOME_PHOTOGRAPHERS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    checkLoginStatus();

    fetchCategories();

    if (history.location.pathname === "/") {
      fetchHomePhotographer();
    }

    fetchPhotographers();

    return () => {
      // cleanup;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        fetchCategories,
        fetchPhotographers,
        userLogin,
        userRegistration,
        setLoadingStatus,
        logOutUser,
        fetchHomePhotographer,
        searchPhotographer,

        home_photographers: state.home_photographers,
        searched_photographers: state.searched_photographers,
        photographers: state.photographers,
        isLoggedIn: state.isLoggedIn,
        user_info: state.user_info,
        categories: state.categories,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
