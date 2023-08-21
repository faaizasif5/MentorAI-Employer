import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddAccountButton from "../common/addButton/addAccountButton";
import Header from "../layout/header/index";
import ProjectTableColumns from "../../constants/ProjectTableColumns";
import DeleteDialog from "../layout/deleteDialogueBox.jsx";
import dataGridStyles from "../layout/datagridStyle/datagridStyle";
import dummyData, { project } from "../../constants/dummydata";
import { deleteProject } from "../../redux/reducers/projectSlice";
import ProjectModal from "../layout/ProjectPreviewModal";

function ProjectList() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const projectData = useSelector((state) => state.projects.projectData);
  const [tableData, setTableData] = useState(projectData);
  const [previewopen, setpreviewOpen] = useState(false);
  const [rowsData, setRowData] = useState(tableData);
  const [deleteisOpen, setdeleteIsOpen] = useState(false);
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
      deleteAccount(rowsData);
    }
    setdeleteIsOpen(false);
  };
  const getResourceNames = (resourceIds) => {
    if (!Array.isArray(resourceIds)) {
      return "";
    }
    const resourceNamesWithDesignation = resourceIds
      .map((resourceId) => {
        const resource = dummyData.find(
          (data) => data.employee_id === resourceId,
        );
        return resource
          ? `${resource.first_name} ${resource.last_name} (${resource.designation}). `
          : "";
      })
      .filter((name) => name !== "");

    return resourceNamesWithDesignation;
  };

  function deleteAccount(id) {
    dispatch(deleteProject(id.id));
  }
  useEffect(() => {
    setTableData(project);
  }, []);
  function handleAddClick() {
    navigate("/addProject");
  }

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header
        title={t("project.projectList")}
        subtitle={t("project.projectListSubtitle")}
      />
      <Box m="40px 0 0 0" height="75vh" sx={dataGridStyles}>
        <AddAccountButton
          handleAddClick={handleAddClick}
          title={t("project.addProject")}
        />
        <DataGrid
          rows={projectData}
          columns={ProjectTableColumns({
            handlePreviewClick,
            handleDeleteClick,
          })}
          getRowId={(row) => row.id}
        />
        <DeleteDialog
          isOpen={deleteisOpen}
          fullScreen={fullScreen}
          handleClickClose={handleDeleteClose}
          handleDeleteConfirm={handleDeleteConfirm}
          title={t("project.delete")}
        />
        <ProjectModal
          open={previewopen}
          handleClose={handlePreviewClose}
          rowsData={rowsData}
          getResourceNames={getResourceNames}
        />
      </Box>
    </Box>
  );
}
export default ProjectList;
