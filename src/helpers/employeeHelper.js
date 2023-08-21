export const getEmployeeNameById = (employeeId, employeeData) => {
  const employee = employeeData.find((emp) => emp.employee_id === employeeId);
  return employee ? `${employee.first_name} ${employee.last_name}` : "";
};

export const filterEmployeesWithoutLineManagers = (employeeData) => {
  return employeeData.filter(
    (employee) =>
      (employee.is_line_manager === false ||
        employee.is_line_manager === null) &&
      employee.line_manager_id === null,
  );
};
