import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import AddAccountButton from "../common/addButton/addAccountButton";
import Header from "../layout/header/index";
import DeleteDialog from "../layout/deleteDialogueBox.jsx";
import PreviewModal from "../layout/previewModal/index";
import dataGridStyles from "../layout/datagridStyle/datagridStyle";
import { setTableReduxData } from "../../redux/reducers/employeeSlice";
import EmployeeTableColumns from "../../constants/EmployeeTableColumn";
import deleteAccount from "../common/deleteHandler/deleteHandler";

function EmployeeList() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const tableData = useSelector((state) => state.employee.employeeData);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [previewopen, setpreviewOpen] = useState(false);
  const [rowsData, setRowData] = useState(tableData);
  const [deleteisOpen, setdeleteIsOpen] = useState(false);
  const handlePreviewClick = (id) => () => {
    setpreviewOpen(true);
    setRowData(id);
  };
  const handlePreviewClose = () => {
    setpreviewOpen(false);
  };
  const handleDeleteClick = (id) => () => {
    setdeleteIsOpen(true);
    setRowData(id);
  };
  const handleDeleteClose = () => {
    setdeleteIsOpen(false);
  };
  const handleDeleteConfirm = () => {
    if (rowsData) {
      deleteAccount(rowsData, tableData, dispatch, setTableReduxData);
    }
    setdeleteIsOpen(false);
  };
  function handleAddClick() {
    navigate("/addEmployee");
  }
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header title={t("employee.title")} subtitle={t("employee.subtitle")} />
      <Box m="40px 0 0 0" height="75vh" sx={dataGridStyles}>
        <AddAccountButton
          handleAddClick={handleAddClick}
          title={t("employee.button")}
        />
        <DataGrid
          rows={tableData}
          columns={EmployeeTableColumns({
            handlePreviewClick,
            handleDeleteClick,
          })}
          getRowId={(row) => row.employee_id}
        />
        <DeleteDialog
          isOpen={deleteisOpen}
          fullScreen={fullScreen}
          handleClickClose={handleDeleteClose}
          handleDeleteConfirm={handleDeleteConfirm}
          title={t("employee.deleteEmployee")}
        />
        <PreviewModal
          open={previewopen}
          handleClose={handlePreviewClose}
          rowsData={rowsData}
        />
      </Box>
    </Box>
  );
}
export default EmployeeList;
