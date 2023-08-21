import React from "react";

export function Checkbox({
  name,
  formState: { touchedFields, errors },
  label,
  withFeedbackLabel = true,
  register,
  customFeedbackLabel,
  type = "checkbox",
  ...props
}) {
  return (
    <>
      <div className="form-check">
        <input
          name={name}
          type={type}
          {...register(name)}
          id={name}
          className={`form-check-input ${errors[name] ? "is-invalid" : ""}`}
        />
        <label htmlFor={name} className="form-check-label">
          {label}
        </label>
      </div>
      {errors[name] && (
        <div className="invalid-feedback">{errors[name]?.message}</div>
      )}
    </>
  );
}
