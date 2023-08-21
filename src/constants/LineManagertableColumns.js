import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import VisibilityIcon from "@mui/icons-material/Visibility";

const LinemanagerTableColumns = ({
  getEmployeeNameById,
  handleAddClick,
  handlePreviewClick,
  handleDeleteClick,
  employeeData,
}) => {
  const columns = [
    { field: "line_manager_id", headerName: "Line Manager ID" },
    { field: "first_name", headerName: "First Name", width: 160 },
    { field: "last_name", headerName: "Last Name", width: 160 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "designation", headerName: "Designation", width: 160 },
    {
      field: "managee",
      headerName: "Managee",
      width: 70,
      renderCell: (params) => {
        const { row } = params;
        const hasManagees = row.employee_ids && row.employee_ids.length > 0;
        if (hasManagees) {
          return (
            <span>
              {row.employee_ids.map((employeeId) => (
                <div key={employeeId}>
                  {getEmployeeNameById(employeeId, employeeData)}
                </div>
              ))}
            </span>
          );
        }
        return [
          <GridActionsCellItem
            icon={<AddIcon />}
            label="Add"
            onClick={handleAddClick(row)}
            color="inherit"
          />,
        ];
      },
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

export default LinemanagerTableColumns;
