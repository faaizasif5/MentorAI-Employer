import { Box, Button, TextField, AlertTitle, useTheme } from "@mui/material";
import { useState } from "react";
import { Formik } from "formik";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import Alert from "@mui/material/Alert";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import Header from "../layout/header/index";
import dummyData from "../../constants/dummydata";
import { projectInitialValues } from "../../constants/initialvalues";
import { ProjectSchema } from "../../helpers/auth-validator";
import { MenuProps } from "../layout/dropdownLayout/dropdownLayout";
import calculateDuration from "../../helpers/calculateDuration";
import { handleProjectFormSubmit } from "../common/formSubmitHandler/formSubmitHandler";
import generateUniqueId from "../../helpers/generateUniqueID";
import {
  formatStartDateText,
  formatLastDateText,
} from "../../helpers/formatDate";
import dropdownStyles from "../layout/dropdownStyle/style";

function AddProject() {
  const today = dayjs();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [submit, setSubmit] = useState(false);
  const [designationName, setDesignationName] = useState([]);
  const [selectedLastDate, setSelectedLastDate] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    projectInitialValues.start_date = selectedLastDate;
  };
  const handleLastDateChange = (date) => {
    setSelectedLastDate(date);
  };

  const handleDropdownChange = (event) => {
    const {
      target: { value },
    } = event;
    setDesignationName(typeof value === "string" ? value.split(",") : value);
    setSelectedEmployeeIds(event.target.value);
  };
  const handleFormSubmit = async (values) => {
    await handleProjectFormSubmit(
      values,
      selectedStartDate,
      selectedLastDate,
      selectedEmployeeIds,
      dispatch,
      setSubmit,
      generateUniqueId,
      calculateDuration,
    );
  };
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header title={t("project.title")} subtitle={t("project.subtitle")} />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={projectInitialValues}
        validationSchema={ProjectSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="inline-grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              marginTop={12}
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                type="text"
                label={t("project.name")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  value={selectedStartDate}
                  label={t("project.startDate")}
                  onChange={handleStartDateChange}
                  inputFormat={formatStartDateText}
                  onBlur={handleBlur}
                  minDate={today}
                  sx={{ gridColumn: "span 1" }}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  value={selectedLastDate}
                  label={t("project.lastDate")}
                  onChange={handleLastDateChange}
                  inputFormat={formatLastDateText}
                  minDate={today}
                  sx={{ gridColumn: "span 1" }}
                />
              </LocalizationProvider>
              <TextField
                fullWidth
                type="text"
                label={t("project.description")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-multiple-name-label">
                  {t("project.pickResources")}
                </InputLabel>
                <Select
                  labelId="designation-label"
                  id="designation-label-name"
                  multiple
                  value={designationName}
                  onChange={handleDropdownChange}
                  variant="filled"
                  input={<OutlinedInput label="Employees" />}
                  MenuProps={MenuProps}
                  sx={{ width: 500 }}
                >
                  {dummyData.map((employee) => (
                    <MenuItem
                      key={employee.employee_id}
                      value={employee.employee_id}
                      style={dropdownStyles(
                        employee.employee_id,
                        designationName,
                        theme,
                      )}
                    >
                      {`${employee.first_name} ${employee.last_name} (${employee.designation})`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="center" mt="25px">
              <Button
                type="submit"
                color="success"
                variant="contained"
                sx={{ width: "400px", height: "40px" }}
              >
                {t("project.addProject")}
              </Button>
            </Box>
            <Box display="grid" justifyContent="center" mt="30px">
              {submit && (
                <Alert severity="success" sx={{ width: "150px" }}>
                  <AlertTitle>{t("project.success")}</AlertTitle>
                  <strong>{t("project.alert")}</strong>
                </Alert>
              )}
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default AddProject;
