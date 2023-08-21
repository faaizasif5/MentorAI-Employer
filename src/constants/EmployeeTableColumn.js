import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import VisibilityIcon from "@mui/icons-material/Visibility";

const EmployeeTableColumns = ({ handlePreviewClick, handleDeleteClick }) => {
  const columns = [
    { field: "employee_id", headerName: "ID" },
    { field: "first_name", headerName: "First Name", width: 160 },
    { field: "last_name", headerName: "Last Name", width: 160 },
    { field: "contact_no", headerName: "Contact", width: 160 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "designation", headerName: "Designation", width: 160 },
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

export default EmployeeTableColumns;
