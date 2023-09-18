import { setErrors } from "../redux/reducers/formErrorsSlice";
import { Regex, validatorsValue } from "../constants/validators";
import { logInWithEmailAndPassword } from "../components/login/firebase";
import validators from "../locales/en";

export default async function validate(values, capt, dispatch) {
  const errors = {};
  if (!values.email) {
    errors.email = validators.validators.auth.email;
  } else if (!Regex.auth.regex.test(values.email)) {
    errors.email = validators.validators.auth.emailFormat;
  } else if (!Regex.auth.emailRegex.test(values.email)) {
    errors.email = validators.validators.auth.foliomail;
  }
  if (!values.password) {
    errors.password = validators.validators.auth.password;
  } else if (values.password.length < validatorsValue.auth.minPasswordLength) {
    errors.password = validators.validators.auth.minPasswordLength;
  } else if (values.password.length > validatorsValue.auth.maxPasswordLength) {
    errors.password = validators.validators.auth.maxPasswordLength;
  }
  if (capt === false) {
    errors.captcha = validators.validators.auth.captcha;
  } else {
    errors.captcha = "";
  }
  try {
    const loginError = await logInWithEmailAndPassword(
      values.email,
      values.password,
    );
    if (loginError) {
      errors.firebase = "Email/Password Incorrect";
    }
  } catch (error) {
    // Handle any unexpected errors here
  }
  if (Object.keys(errors).length > 0) {
    dispatch(setErrors(errors));
  }
  return errors;
}
