import { Box } from "@mui/material";
import DashboardTitle from "./dashboardTitle";
import RedAlertEmployees from "../redAlertEmployees";
import AvgEmployeeMoodBox from "../averageMoodBox";
import PieChartBox from "../PieChart/index";
import EmployeeLoad from "../employeeLoad";
import "./styles.css";

function Dashboard() {
  return (
    <Box m="15px">
      <DashboardTitle />
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridAutoRows="auto"
        gap="15px"
        justifyContent="center"
        alignItems="center"
      >
        {/* First Row */}
        <EmployeeLoad />
        <PieChartBox />
        {/* Second Row */}
        <RedAlertEmployees />
        <AvgEmployeeMoodBox />
      </Box>
    </Box>
  );
}

export default Dashboard;
