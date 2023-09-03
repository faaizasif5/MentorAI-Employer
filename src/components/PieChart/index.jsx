import React from "react";
import { Box, Typography } from "@mui/material";
import PieChartGraph from "./PieChartGraph";
import { PieChartdata } from "../../constants/dummydata";
import { PieChartBoxStyle, PieChartTypographyStyle } from "../layout/muiStyles";

function PieChartBox() {
  return (
    <Box
      gridColumn="span 1"
      gridRow="span 1"
      width="597px"
      height="374px"
      sx={PieChartBoxStyle}
    >
      <Typography variant="h6" sx={PieChartTypographyStyle}>
        PieChart
      </Typography>
      <PieChartGraph chartData={PieChartdata} />
    </Box>
  );
}

export default PieChartBox;
