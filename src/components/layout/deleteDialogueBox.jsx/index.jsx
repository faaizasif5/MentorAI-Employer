import {
  useTheme,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { tokens } from "../../../theme";

function deleteDialog({
  fullScreen,
  isOpen,
  handleClickClose,
  handleDeleteConfirm,
  title,
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const colors = tokens(theme.palette.mode);
  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={handleClickClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle
        id="responsive-dialog-title"
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Lato",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ fontFamily: "unset" }}>
          <h5>{t("delete.DialogContentText")}</h5>
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          autoFocus
          onClick={handleClickClose}
          style={{
            height: "35px",
            backgroundColor: colors.blueAccent[700],
            color: theme.palette.common.white,
            width: "45%",
          }}
        >
          {t("delete.cancel")}
        </Button>
        <Button
          onClick={handleDeleteConfirm}
          autoFocus
          style={{
            height: "35px",
            backgroundColor: theme.palette.error.main,
            color: theme.palette.common.white,
            width: "45%",
          }}
        >
          {t("delete.delete")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default deleteDialog;
