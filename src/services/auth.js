import axios from "./api-client";
import API from "../constants/apis";
import { BASE_URL } from "../config/environment";
import { loginSubmit, loginSuccess } from "../redux/reducers/AuthReducer";
import store from "../redux/store";
import { addItem } from "./storage-service";
import APP_CONSTANTS from "../constants/app-constants";

export const signin = (data) => {
  store.dispatch(loginSubmit());
  addItem(APP_CONSTANTS.ACCESS_TOKEN, JSON.stringify(data));
  store.dispatch(loginSuccess(data));

  // try {
  //   const response = axios.post(`${API.LOGIN}`, data);
  //   console.log("response", response);
  //   const data12 = response.data.data;
  //   if (response.data.code === 200) {
  //     addItem(APP_CONSTANTS.ACCESS_TOKEN, "TEST_TOKEN");
  //     dispatch(loginSuccess(response.data));
  //   }
  // } catch (err) {
  //   dispatch(loginError("Error here"));
  // }
};

export const register = (data) =>
  axios.post(`${BASE_URL}${API.REGISTER}`, data);
