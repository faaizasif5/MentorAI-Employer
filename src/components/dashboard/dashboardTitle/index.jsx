import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  DashboardTitleBoxStyle,
  DashboardTitleTextStyle,
  LoadStressTitleBox,
  LoadTitle,
  StressTitle,
} from "../../layout/muiStyles";

function DashboardTitle() {
  return (
    <>
      <Box sx={DashboardTitleBoxStyle}>
        <Typography sx={DashboardTitleTextStyle}>Dashboard</Typography>
      </Box>
      <Box sx={LoadStressTitleBox}>
        <Typography variant="h6" sx={LoadTitle}>
          Employee Load
        </Typography>
        <Typography variant="h6" sx={StressTitle}>
          Overall Employee Stress
        </Typography>
      </Box>
    </>
  );
}

export default DashboardTitle;
