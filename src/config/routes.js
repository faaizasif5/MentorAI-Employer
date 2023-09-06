import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PortraitIcon from "@mui/icons-material/Portrait";
import TaskIcon from "@mui/icons-material/Task";

const Routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <HomeOutlinedIcon />,
  },
  {
    path: "/employee",
    name: "Employee List",
    icon: <PeopleOutlinedIcon />,
  },
  {
    path: "/lineManager",
    name: "Line Manager Portal",
    icon: <SupervisorAccountIcon />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <TaskIcon />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <PortraitIcon />,
  },
  // {
  //     name: "Login",
  //     path: "/login",
  //     component: lazy(() =>
  //     import("../components/login")
  //     ),
  //     requireAuthentication: false,
  // },
  // {
  //     name: "Signup",
  //     path: "/signup",
  //     component: lazy(() =>
  //     import("../components/signup")
  //     ),
  //     requireAuthentication: false,
  // },
  // {
  //     name: "Dashboard",
  //     path: "/dashboard",
  //     component: lazy(() =>
  //     import("../components/dashboard")
  //     ),
  //     requireAuthentication: true,
  // },
];

export default Routes;
