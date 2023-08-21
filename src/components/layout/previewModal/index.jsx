import {
  Box,
  Modal,
  Fade,
  Grid,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  Backdrop,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import DialpadIcon from "@mui/icons-material/Dialpad";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import NumbersIcon from "@mui/icons-material/Numbers";
import style from "../modalStyle/modalStyle";

function EmployeeModal({ open, handleClose, rowsData }) {
  const { t } = useTranslation();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Grid container>
            <Grid item xs={11}>
              <List sx={{ width: "100%" }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <NumbersIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ marginTop: "10px" }}
                    primary={t("employee.id")}
                    secondary={
                      rowsData.line_manager_id
                        ? rowsData.line_manager_id
                        : rowsData.employee_id
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("employee.name")}
                    secondary={`${rowsData.first_name} ${rowsData.last_name}`}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("employee.email")}
                    secondary={rowsData.email}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("employee.Designation")}
                    secondary={rowsData.designation}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DialpadIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("employee.Contact")}
                    secondary={rowsData.contact_no}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DescriptionIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("employee.cnic")}
                    secondary={rowsData.cnic}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <HomeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("employee.address")}
                    secondary={rowsData.address}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </Grid>
            <Divider sx={{ margin: "16px 0", backgroundColor: "black" }} />
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default EmployeeModal;
