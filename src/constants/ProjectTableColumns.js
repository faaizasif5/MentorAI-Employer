import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProjectTableColumns = ({ handlePreviewClick, handleDeleteClick }) => {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Project Name",
      width: 160,
    },
    {
      field: "start_date",
      headerName: "Start Date",
      width: 120,
    },
    {
      field: "end_date",
      headerName: "End Date",
      width: 120,
    },
    {
      field: "duration",
      headerName: "Duration (Days)",
      width: 100,
      align: "center",
      cellClassName: "center-align-cell",
    },
    {
      field: "no_of_resources",
      headerName: "Number of Resources",
      align: "center",
      cellClassName: "center-align-cell",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "Preview",
      type: "actions",
      headerName: "Preview",
      width: 100,
      cellClassName: "actions",
      getActions: ({ row }) => {
        return [
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="Preview"
            onClick={handlePreviewClick(row)}
            color="inherit"
          />,
        ];
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Delete",
      width: 100,
      cellClassName: "actions",
      getActions: ({ row }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(row)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return columns;
};

export default ProjectTableColumns;
