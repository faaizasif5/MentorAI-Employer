import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Input, Select } from "..";

const CONTROLS = {
  input: Input,
  checkbox: Checkbox,
  select: Select,
};
const propTypes = {
  type: PropTypes.oneOf([
    "checkbox",
    "text",
    "email",
    "password",
    "date",
    "select",
  ]).isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  control: PropTypes.oneOf(["input", "checkbox", "select"]).isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

function Controller(props) {
  const RenderControl = CONTROLS[props.control];
  return <RenderControl {...props} />;
}

Controller.propTypes = propTypes;

export const FormController = React.memo(Controller);
