import React from "react";
import { getFieldCSSClasses } from "../../../../helpers/ui-helper";
import { FieldFeedbackLabel } from "./field-feedback-label";

export function Input({
  name,
  formState: { touchedFields, errors },
  label,
  withFeedbackLabel = true,
  register,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        type={type}
        autoComplete="off"
        className={getFieldCSSClasses(touchedFields[name], errors[name])}
        {...props}
        {...register(name)}
      />
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
