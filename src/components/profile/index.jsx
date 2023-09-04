import { Box, TextField, Avatar, ListItemAvatar } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import Stack from "@mui/material/Stack";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import NumbersIcon from "@mui/icons-material/Numbers";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import DialpadIcon from "@mui/icons-material/Dialpad";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import Header from "../layout/header";
import AvatarImage from "../../assets/profileImage.jpg";

function Profile() {
  const { t } = useTranslation();
  const [value, setValue] = useState(dayjs("2022-04-17"));
  return (
    <>
      <Header title="Profile Details" subtitle="View Your Profile Details" />
      <Box sx={{ ml: 12, height: "80vh", marginTop: "100px" }}>
        <Divider
          flexItem
          sx={{ backgroundColor: "#000000", width: "156vh", marginBottom: 2 }}
        />
        <Stack direction="row" spacing={4}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#000000" }}
          />
          <Stack direction="column" justifyContent="space-evenly">
            <Avatar
              alt="Remy Sharp"
              src={AvatarImage}
              sx={{ width: 200, height: 200 }}
              padding="50px"
            />
          </Stack>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#000000", alignItems: "center" }}
          />
          <Stack direction="column" justifyContent="space-evenly" spacing={3}>
            <Stack direction="row" alignItems="center">
              <ListItemAvatar>
                <Avatar>
                  <NumbersIcon />
                </Avatar>
              </ListItemAvatar>
              <TextField
                sx={{ width: 300, maxWidth: "100%" }}
                id="standard-read-only-input"
                label={t("employee.id")}
                defaultValue="23"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <TextField
                sx={{ width: 300, maxWidth: "100%" }}
                id="standard-read-only-input"
                label={t("employee.name")}
                defaultValue="Syed Faaiz Asif"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <ListItemAvatar>
                <Avatar>
                  <AlternateEmailIcon />
                </Avatar>
              </ListItemAvatar>
              <TextField
                sx={{ width: 300, maxWidth: "100%" }}
                id="standard-read-only-input"
                label={t("employee.email")}
                defaultValue="syedfaaizasif@folio3.com"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <ListItemAvatar>
                <Avatar>
                  <DialpadIcon />
                </Avatar>
              </ListItemAvatar>
              <TextField
                sx={{ width: 300, maxWidth: "100%" }}
                id="standard-read-only-input"
                label={t("employee.Contact")}
                defaultValue="03312470377"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Stack>
          </Stack>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#000000" }}
          />
          <Stack direction="column" justifyContent="space-evenly" spacing={3}>
            <Stack direction="row" alignItems="center">
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <TextField
                sx={{ width: 300, maxWidth: "100%" }}
                id="standard-read-only-input"
                label={t("employee.Designation")}
                defaultValue="Admin"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <ListItemAvatar>
                <Avatar>
                  <DescriptionIcon />
                </Avatar>
              </ListItemAvatar>
              <TextField
                sx={{ width: 300, maxWidth: "100%" }}
                id="standard-read-only-input"
                label={t("employee.cnic")}
                defaultValue="42201-6634859-3"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <ListItemAvatar>
                <Avatar>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <TextField
                sx={{ width: 300, maxWidth: "100%" }}
                id="outlined-read-only-input"
                label={t("employee.address")}
                defaultValue="Folio3 Tower, Plot 26 Shahrah-e-Faisal Rd,Karachi"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <ListItemAvatar>
                <Avatar>
                  <CalendarMonthIcon />
                </Avatar>
              </ListItemAvatar>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateField", "DateField"]}>
                  <DateField
                    label={t("employee.DateofJoining")}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    format="LL"
                    sx={{ width: 300, maxWidth: "100%" }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>
          </Stack>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#000000" }}
          />
        </Stack>
        <Divider
          flexItem
          sx={{ backgroundColor: "#000000", marginTop: 2, width: "156vh" }}
        />
      </Box>
    </>
  );
}

export default Profile;
