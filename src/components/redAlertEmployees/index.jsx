import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { redAlertEmployees } from "../../constants/dummydata";
import {
  RedAlertBoxStyle,
  RedAlertTitleStyle,
  RedAlertContentBoxStyle,
  RedAlertEmpName,
  RedAlertDate,
  RedAlertDivider,
  RedAlertFrequency,
} from "../layout/muiStyles";

function RedAlertEmployees() {
  return (
    <Box>
      <Box sx={RedAlertBoxStyle}>
        <Typography sx={RedAlertTitleStyle}>Employees on Red Alert</Typography>
      </Box>
      <Box
        gridColumn="span 1"
        gridRow="span 1"
        width="597px"
        maxHeight="282px"
        marginTop="16px"
        sx={{
          ...RedAlertContentBoxStyle,
          overflowY: "auto",
        }}
      >
        {redAlertEmployees.map((employee) => (
          <div key={employee.id}>
            <Box sx={{ display: "flex", mt: 2, ml: 4, alignItems: "center" }}>
              <Avatar alt={employee.name} src={employee.avatar} />
              <Typography sx={RedAlertEmpName}>{employee.name}</Typography>
              <Typography sx={{ ...RedAlertFrequency, marginLeft: "110px" }}>
                {employee.frequency}
              </Typography>
              <Typography sx={RedAlertDate}>{employee.date}</Typography>
            </Box>
            <Divider sx={RedAlertDivider} />
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default RedAlertEmployees;
