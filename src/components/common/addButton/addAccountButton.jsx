import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddAccountButton({ handleAddClick, title }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        maxWidth: "200px",
        marginLeft: "auto",
      }}
    >
      <Button
        variant="contained"
        color="success"
        style={{
          fontSize: "12px",
          padding: "6px 12px",
          width: "100%",
          marginBottom: "15px",
        }}
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        {title}
      </Button>
    </Box>
  );
}
export default AddAccountButton;
