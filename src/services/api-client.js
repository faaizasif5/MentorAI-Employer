import Axios from "axios";
import HTTP_STATUS from "../constants/app-constants";
import { getItem } from "./storage-service";
import APP_CONSTANTS from "../constants/app-constants";

const { CancelToken } = Axios;
const source = CancelToken.source();
export class AccessToken {
  static token = getItem(APP_CONSTANTS.ACCESS_TOKEN);

  static source = source;
}
const { token } = AccessToken;
const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  cancelToken: AccessToken.source?.token,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // LOGOUT IN CASE OF UNAUTHORIZE
    if (error?.response?.data?.code === HTTP_STATUS.UNAUTHORIZE) {
      // location.reload();
    }

    // CONNECTION UNAVAILABLE
    if (!error.response) {
      console.log("Please check your internet connection");

      return error;
    }

    console.log("An error occurred");

    return error?.response;
  },
);

export default axios;
