import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../layout/header/index";
import DeleteDialog from "../layout/deleteDialogueBox.jsx";
import PreviewModal from "../layout/previewModal/index";
import dataGridStyles from "../layout/datagridStyle/datagridStyle";
import AddDialog from "../layout/AddDialog";
import { setLineManagerToEmployee } from "../../redux/reducers/employeeSlice";
import LinemanagerTableColumns from "../../constants/LineManagertableColumns";
import deleteAccount from "../common/deleteHandler/deleteHandler";
import handleAssignClick from "../common/assignHandler/assignHandler";
import {
  setLineManagerData,
  setEmployeeToLineManager,
} from "../../redux/reducers/lineManagerSlice";
import {
  getEmployeeNameById,
  filterEmployeesWithoutLineManagers,
} from "../../helpers/employeeHelper";

function lineManagerList() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const tableData = useSelector((state) => state.lineManager.lineManagerData);
  const employeeData = useSelector((state) => state.employee.employeeData);
  const [addOpen, setaddOpen] = useState(false);
  const [rowsData, setRowData] = useState(tableData);
  const [previewopen, setpreviewOpen] = useState(false);
  const [deleteisOpen, setdeleteIsOpen] = useState(false);
  const [selectedLineManager, setselectedLineManager] = useState();
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
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
      deleteAccount(rowsData, tableData, dispatch, setLineManagerData);
    }
    setdeleteIsOpen(false);
  };
  const handleAddClick = (id) => () => {
    setaddOpen(true);
    setselectedLineManager(id);
  };
  const handleAddClose = () => {
    setaddOpen(false);
  };
  const handleAddChange = (event) => {
    setSelectedEmployeeId(event.target.value);
  };
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header
        title={t("linemanager.LineManagerList")}
        subtitle={t("linemanager.subtitle")}
        sx={{ marginTop: 4 }}
      />
      <Box m="40px 0 0 0" height="75vh" sx={dataGridStyles}>
        <DataGrid
          rows={tableData}
          columns={LinemanagerTableColumns({
            getEmployeeNameById,
            handleAddClick,
            handlePreviewClick,
            handleDeleteClick,
            employeeData,
          })}
          getRowId={(row) => row.line_manager_id}
        />
        <AddDialog
          addOpen={addOpen}
          handleAddClose={handleAddClose}
          selectedEmployeeId={selectedEmployeeId}
          handleChange={handleAddChange}
          employeesWithoutLineManagers={filterEmployeesWithoutLineManagers(
            employeeData,
          )}
          handleAssignClick={handleAssignClick(
            dispatch,
            selectedLineManager,
            selectedEmployeeId,
            navigate,
            setEmployeeToLineManager,
            setLineManagerToEmployee,
          )}
        />
        <DeleteDialog
          isOpen={deleteisOpen}
          fullScreen={fullScreen}
          handleClickClose={handleDeleteClose}
          handleDeleteConfirm={handleDeleteConfirm}
          title={t("linemanager.delete")}
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
export default lineManagerList;
