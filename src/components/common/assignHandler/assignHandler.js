const handleAssignClick =
  (
    dispatch,
    selectedLineManager,
    selectedEmployeeId,
    navigate,
    setEmployeeToLineManager,
    setLineManagerToEmployee,
  ) =>
  () => {
    alert(`Line Manager has been Assigned!`);
    dispatch(
      setEmployeeToLineManager({
        lineManagerId: selectedLineManager.line_manager_id,
        employeeId: selectedEmployeeId,
      }),
    );
    dispatch(
      setLineManagerToEmployee({
        lineManagerId: selectedLineManager.line_manager_id,
        employeeId: selectedEmployeeId,
      }),
    );
    navigate("/employee");
  };
export default handleAssignClick;
