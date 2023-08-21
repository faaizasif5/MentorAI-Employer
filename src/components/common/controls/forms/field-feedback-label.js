import React from "react";

export function FieldFeedbackLabel({
  label,
  touched,
  error,
  customFeedbackLabel,
}) {
  if (error) {
    return <div className="invalid-feedback">{error}</div>;
  }

  if (touched && !error && label) {
    // return <div className="valid-feedback">{label} was entered correct</div>;
    return <div className="valid-feedback" />;
  }

  return (
    <div className="feedback" style={{ fontSize: "11px", padding: "2px" }}>
      {customFeedbackLabel && <>{customFeedbackLabel}</>}
    </div>
  );
}
