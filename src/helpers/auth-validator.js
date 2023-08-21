import * as yup from "yup";
import validators from "../locales/en";
import { Regex, validatorsValue } from "../constants/validators";
import { translation } from "./i8n-helper";

const authValidators = { ...Regex.auth, ...validatorsValue.auth };
const authFieldT = translation("auth");
const authValidatorT = translation("validators.auth");
const emailValidator = {
  email: yup
    .string()
    .email(`${authValidatorT("emailFormat")}`)
    .required(`${authValidatorT("email")}`),
};
const passwordValidator = {
  password: yup
    .string()
    .min(
      authValidators.minPasswordLength,
      `${authFieldT("password")}${authValidatorT("minPasswordLength")}`,
    )
    .max(
      authValidators.maxPasswordLength,
      `${authFieldT("password")}${authValidatorT("maxPasswordLength")}`,
    )
    .required(`${authFieldT("password")}${authValidatorT("password")}`)
    .matches(
      authValidators.passwordRegex,
      `${authFieldT("password")}${authValidatorT("passwordRegex")}`,
    ),
};

export const loginSchemaValidator = yup.object().shape({
  ...emailValidator,
  ...passwordValidator,
});
export const signupSchemaValidator = yup.object().shape({
  ...emailValidator,
  firstName: yup.string().required(`${authValidatorT("firstName")}`),
  lastName: yup.string().required(`${authValidatorT("lastName")}`),
  role: yup.string().required(`${authValidatorT("role")}`),
  dob: yup
    .string()
    .required(`${authValidatorT("dob")}`)
    .matches(authValidators.dateRegex, `${authValidatorT("passwordRegex")}`),
  acceptTerms: yup.bool().oneOf([true], `${authValidatorT("acceptTerms")}`),
  ...passwordValidator,
  confirmPassword: yup
    .string()
    .min(
      authValidators.minPasswordLength,
      `${authFieldT("confirmPassword")}${authValidatorT("minPasswordLength")}`,
    )
    .max(
      authValidators.maxPasswordLength,
      `${authFieldT("confirmPassword")}${authValidatorT("maxPasswordLength")}`,
    )
    .required(`${authFieldT("confirmPassword")}${authValidatorT("password")}`)
    .oneOf([yup.ref("password"), null], `${authValidatorT("passwordMatch")}`),
});
export const checkoutSchema = yup.object().shape({
  firstname: yup
    .string()
    .matches(Regex.auth.nameRegex, validators.validators.auth.firstNameNotValid)
    .required(validators.validators.auth.firstName),
  lastname: yup
    .string()
    .matches(Regex.auth.nameRegex, validators.validators.auth.lastNameNotValid)
    .required(validators.validators.auth.lastName),
  password: yup
    .string()
    .min(
      validatorsValue.auth.minPasswordLength,
      validators.validators.auth.minPasswordLength,
    )
    .max(
      validatorsValue.auth.maxPasswordLength,
      validators.validators.auth.maxPasswordLength,
    )
    .required(validators.validators.auth.password),
  email: yup
    .string()
    .matches(Regex.auth.emailRegex, validators.validators.auth.foliomail)
    .email(validators.validators.auth.emailFormat)
    .required(validators.validators.auth.email),
  contact_no: yup
    .string()
    .matches(Regex.auth.phoneRegExp, validators.validators.auth.phoneNumber)
    .required(validators.validators.auth.phoneNumberRequired)
    .min(
      validatorsValue.auth.minContactLength,
      validators.validators.auth.phoneNumberLength,
    )
    .max(
      validatorsValue.auth.maxContactLength,
      validators.validators.auth.phoneNumberLength,
    ),
  cnic: yup
    .string()
    .required(validators.validators.auth.cnicRequired)
    .min(validatorsValue.auth.minCnicLength, validators.auth.cnic)
    .max(validatorsValue.auth.maxCnicLength, validators.auth.cnic),
  address: yup
    .string()
    .required(validators.validators.auth.address)
    .min(
      validatorsValue.auth.minAddressLength,
      validators.auth.minAddressLength,
    )
    .max(
      validatorsValue.auth.maxAddressLength,
      validators.auth.maxAddressLength,
    ),
});
export const ProjectSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      Regex.auth.nameRegex,
      validators.validators.auth.projectNameNotValid,
    )
    .required(validators.validators.auth.projectName),
  start_date: yup.date().required(validators.validators.auth.start_date),
  description: yup
    .string()
    .required(validators.validators.auth.description)
    .min(
      validatorsValue.auth.minDescriptionLength,
      validators.auth.minDescriptionLength,
    )
    .max(
      validatorsValue.auth.maxDescriptionLength,
      validators.auth.maxDescriptionLength,
    ),

  // lastname: yup
  //   .string()
  //   .matches(Regex.auth.nameRegex, validators.validators.auth.lastNameNotValid)
  //   .required(validators.validators.auth.lastName),
  // password: yup
  //   .string()
  //   .min(
  //     validatorsValue.auth.minPasswordLength,
  //     validators.validators.auth.minPasswordLength,
  //   )
  //   .max(
  //     validatorsValue.auth.maxPasswordLength,
  //     validators.validators.auth.maxPasswordLength,
  //   )
  //   .required(validators.validators.auth.password),
  // email: yup
  //   .string()
  //   .matches(Regex.auth.emailRegex, validators.validators.auth.foliomail)
  //   .email(validators.validators.auth.emailFormat)
  //   .required(validators.validators.auth.email),
  // contact: yup
  //   .string()
  //   .matches(Regex.auth.phoneRegExp, validators.validators.auth.phoneNumber)
  //   .required(validators.validators.auth.phoneNumberRequired)
  //   .min(
  //     validatorsValue.auth.minContactLength,
  //     validators.validators.auth.phoneNumberLength,
  //   )
  //   .max(
  //     validatorsValue.auth.maxContactLength,
  //     validators.validators.auth.phoneNumberLength,
  //   ),
  // cnic: yup
  //   .string()
  //   .required(validators.validators.auth.cnicRequired)
  //   .min(validatorsValue.auth.minCnicLength, validators.auth.cnic)
  //   .max(validatorsValue.auth.maxCnicLength, validators.auth.cnic),
  // address: yup
  //   .string()
  //   .required(validators.validators.auth.address)
  //   .min(
  //     validatorsValue.auth.minAddressLength,
  //     validators.auth.minAddressLength,
  //   )
  //   .max(
  //     validatorsValue.auth.maxAddressLength,
  //     validators.auth.maxAddressLength,
  //   ),
});
