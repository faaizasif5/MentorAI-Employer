import { translation } from "../helpers/i8n-helper";
import { ROLES } from "./app-constants";

const t = translation("auth");
export const SignupFormFields = [
  {
    type: "text",
    placeholder: t("firstName"),
    name: "firstName",
    label: t("firstName"),
    control: "input",
  },
  {
    type: "text",
    placeholder: t("lastName"),
    name: "lastName",
    label: t("lastName"),
    control: "input",
  },
  {
    type: "text",
    placeholder: t("email"),
    name: "email",
    label: t("email"),
    control: "input",
  },
  {
    type: "select",
    placeholder: t("role"),
    name: "role",
    label: t("role"),
    control: "select",
    options: ROLES,
  },
  {
    type: "date",
    placeholder: t("dob"),
    name: "dob",
    label: t("dob"),
    control: "input",
  },
  {
    type: "password",
    placeholder: t("password"),
    name: "password",
    label: t("password"),
    control: "input",
  },
  {
    type: "password",
    placeholder: t("confirmPassword"),
    name: "confirmPassword",
    label: t("confirmPassword"),
    control: "input",
  },
  {
    type: "checkbox",
    placeholder: t("acceptTerms"),
    name: "acceptTerms",
    label: t("acceptTerms"),
    control: "checkbox",
  },
];

export const LoginFormFields = [
  {
    type: "text",
    placeholder: t("email"),
    name: "email",
    label: t("email"),
    control: "input",
  },
  {
    type: "password",
    placeholder: t("password"),
    name: "password",
    label: t("password"),
    control: "input",
  },
];
