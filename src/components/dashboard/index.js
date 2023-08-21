import React from "react";
import { useTranslation } from "react-i18next";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../layout/header/index";
// import { removeItem } from "Service/storage-service";
// import APP_CONSTANTS from "Constants/app-constants";
import "./styles.css";

function Dashboard() {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const dispatch = useDispatch();
  // const userDetails = useSelector((state) => state.AuthReducer.user);
  // const logout = () => {
  //   removeItem(APP_CONSTANTS.ACCESS_TOKEN);
  //   dispatch(logoutUser());
  // };
  return (
    <Box m="30px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title={t("dashboard.title")}
          subtitle={t("dashboard.subtitle")}
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="15px"
      >
        {/*  */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* ...  */}
        </Box>

        {/*  */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* ...  */}
        </Box>

        {/* */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* ...  */}
        </Box>

        {/*  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* ... */}
        </Box>

        {/* */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* ... */}
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
