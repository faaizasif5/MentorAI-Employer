import React from "react";
import { Typography } from "@mui/material";
import { LoadTypeTextStyle } from "../../layout/muiStyles";

function LoadType(props) {
  const { text } = props;
  return <Typography sx={LoadTypeTextStyle}>{text}</Typography>;
}
export default LoadType;
