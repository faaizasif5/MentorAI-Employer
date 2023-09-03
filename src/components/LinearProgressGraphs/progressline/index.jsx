import React from "react";
import { LinearProgress } from "@mui/material";

function ProgressLine(props) {
  const { value, color } = props;
  return (
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        borderRadius: "7.5px",
        "& .MuiLinearProgress-bar": {
          backgroundColor: color,
        },
        backgroundColor: "transparent",
      }}
    />
  );
}

export default ProgressLine;
