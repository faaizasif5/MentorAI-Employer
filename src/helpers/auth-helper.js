import { AccessToken } from "Service/api-client";
import { useSelector } from "react-redux";

export const isLoggedIn = () => {
  const userDetails = useSelector((state) => state.AuthReducer.user);
  if (userDetails) {
    AccessToken.token = 123456;
    return true;
  }
  return false;
};
