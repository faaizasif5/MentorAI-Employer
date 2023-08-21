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
  IconButton,
  Backdrop,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import NumbersIcon from "@mui/icons-material/Numbers";
import EditIcon from "@mui/icons-material/Edit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import style from "../modalStyle/modalStyle";

function ProjectModal({ open, handleClose, rowsData, getResourceNames }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  function handleEditClick() {
    navigate("/addProject");
  }
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
                    primary={t("project.id")}
                    secondary={rowsData.id}
                  />
                  <IconButton
                    size="small"
                    onClick={handleEditClick}
                    sx={{
                      display: "flex",
                      fontSize: "12px",
                      flexDirection: "column",
                      maxWidth: "50px",
                      alignItems: "center",
                      "& .MuiSvgIcon-root": {
                        marginBottom: "4px",
                      },
                    }}
                  >
                    Edit
                    <EditIcon />
                  </IconButton>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("project.name")}
                    secondary={rowsData.name}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CalendarMonthIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("project.startDate")}
                    secondary={rowsData.start_date}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CalendarMonthIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("project.lastDate")}
                    secondary={rowsData.end_date}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ScheduleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("project.duration")}
                    secondary={rowsData.duration}
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
                    primary={t("project.description")}
                    secondary={rowsData.description}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Diversity3Icon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("project.NumberofResourses")}
                    secondary={rowsData.no_of_resources}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ListAltIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("project.ResourseList")}
                    secondary={getResourceNames(rowsData.resource_list)}
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

export default ProjectModal;
