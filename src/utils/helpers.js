import Cookies from "js-cookie";
import jwt from "jwt-simple";
import CryptoJS from "crypto-js";
import { categories, counties } from "./data";

// export const baseURL = "http://localhost:81/kliks/v1/api";
export const baseURL = "https://www.pichabay.com/v1/api";

export const categoryName = (id) => {
  const category = categories.filter((item) => item.id === id);

  return category.name;
};

export const countyName = (id) => {
  const county = counties.filter((l) => l.id === id);

  return county.name;
};

export const encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_SECRET
  ).toString();

  return ciphertext;
};

export const decryptData = (ciphertext) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, process.env.REACT_APP_SECRET);
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};

export const addCookie = (payload, cookie_name) => {
  var date = new Date();

  date.setTime(date.getTime() + 1 * 3600 * 1000);

  Cookies.set(cookie_name, payload, {
    expires: date,
  });
};

export const deleteCookie = () => {
  var cookie = document.cookie.split(";");

  for (var i = 0; i < cookie.length; i++) {
    var chip = cookie[i],
      entry = chip.split("="),
      name = entry[0];

    Cookies.remove(name);

    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
};

export const readJwt = (token) => {
  let value = [];
  const secret = "@pichabay_";

  value = jwt.decode(token, secret);

  return value;
};

export const addCommas = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const sanitizeBookName = (name) => {
  return name.replace(/\s+/g, "-").toLowerCase();
};

export const getNumberofWords = (description) => {
  const words = description.length;

  return words;
};

export const capitalizeFirstLetter = (str) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
};
