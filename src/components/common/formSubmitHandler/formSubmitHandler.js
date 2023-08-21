import dayjs from "dayjs";
import { addLineManager } from "../../../redux/reducers/lineManagerSlice";
import { addEmployee } from "../../../redux/reducers/employeeSlice";
import { addProject } from "../../../redux/reducers/projectSlice";

const FormSubmitHandler = async (
  values,
  isLineManager,
  designationName,
  dispatch,
  setSubmit,
  generateUniqueId,
) => {
  values.id = generateUniqueId();

  const newUserCredentials = {
    employee_id: values.id,
    password: values.password,
  };

  const accountDetails = {
    employee_id: values.id,
    address: values.address,
    cnic: values.cnic,
    contact_no: values.contact_no,
    designation: designationName[0],
    email: values.email,
    first_name: values.firstname,
    is_line_manager: isLineManager,
    last_name: values.lastname,
    line_manager_id: null,
  };

  const lineManagerDetails = {
    line_manager_id: values.id,
    first_name: values.firstname,
    last_name: values.lastname,
    email: values.email,
    address: values.address,
    contact_no: values.contact_no,
    cnic: values.cnic,
    designation: designationName[0],
    is_line_manager: isLineManager,
    employee_ids: [],
  };

  dispatch(addEmployee(accountDetails));

  if (accountDetails.is_line_manager) {
    dispatch(addLineManager(lineManagerDetails));
  }

  setSubmit(true);
};

export default FormSubmitHandler;

export const handleProjectFormSubmit = async (
  values,
  selectedStartDate,
  selectedLastDate,
  selectedEmployeeIds,
  dispatch,
  setSubmit,
  generateUniqueId,
  calculateDuration,
) => {
  values.start_date = dayjs(selectedStartDate).format("YYYY-MM-DD");
  values.end_date = dayjs(selectedLastDate).format("YYYY-MM-DD");
  values.resource_list = selectedEmployeeIds;
  values.id = generateUniqueId();
  values.duration = calculateDuration(values.start_date, values.end_date);
  values.status = "Kickoff";
  values.no_of_resources = values.resource_list.length;
  dispatch(addProject(values));
  setSubmit(true);
};
