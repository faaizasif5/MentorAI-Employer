import { Regex, validatorsValue } from "../constants/validators";
import validators from "../locales/en";

export default function validate(values, capt) {
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
  }
  return errors;
}
