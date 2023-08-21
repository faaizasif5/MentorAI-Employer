import axios from "axios";
import { AccessToken } from "./api-client";
import APP_CONSTANTS from "../constants/app-constants";

export const addItem = (key, value) => {
  localStorage.setItem(key, value);
  if (key === APP_CONSTANTS.ACCESS_TOKEN) AccessToken.token = value;
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
  if (key === APP_CONSTANTS.ACCESS_TOKEN) {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    AccessToken.token = null;
    AccessToken.source?.cancel?.();
    AccessToken.source = source;
  }
};

export const getItem = (key) => {
  return localStorage.getItem(key);
};
