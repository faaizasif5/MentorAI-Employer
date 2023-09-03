import React from "react";
import { PieChart } from "@mui/x-charts";
import { PieChartStyle } from "../layout/muiStyles";

function PieChartGraph({ chartData }) {
  return (
    <PieChart
      series={[
        {
          data: chartData,
          cx: 180,
          cy: 140,
          innerRadius: 120,
          outerRadius: 80,
        },
      ]}
      height={400}
      legend={{
        direction: "column",
        position: {
          vertical: "middle",
          horizontal: "middle",
        },
      }}
      sx={PieChartStyle}
    />
  );
}

export default PieChartGraph;
