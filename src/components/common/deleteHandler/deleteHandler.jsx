const deleteAccount = (id, tableData, dispatch, setTableReduxData) => {
  const newData = [...tableData];
  const prevIndex = tableData.findIndex(
    (item) => item.employee_id === id.employee_id,
  );
  newData.splice(prevIndex, 1);
  dispatch(setTableReduxData(newData));
};
export default deleteAccount;
