import React from "react";
import { FieldFeedbackLabel } from "./field-feedback-label";
import { getFieldCSSClasses } from "../../../../helpers/ui-helper";

const optionUI = (item) => <option value={item}>{item}</option>;
export function Select({
  name,
  formState: { touchedFields, errors },
  label,
  withFeedbackLabel = true,
  register,
  customFeedbackLabel,
  options = [],
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>{label}</label>}
      <select
        className={getFieldCSSClasses(touchedFields[name], errors[name])}
        {...register(name)}
        {...props}
      >
        {React.Children.toArray(options.map(optionUI))}
      </select>

      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[name]?.message}
          touched={touchedFields[name]}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}
