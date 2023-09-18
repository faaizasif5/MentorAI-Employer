import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PortraitIcon from "@mui/icons-material/Portrait";
import TaskIcon from "@mui/icons-material/Task";
import Logout from "@mui/icons-material/Logout";

const Routes = [
  {
    path: "/dashboard/home",
    name: "Dashboard",
    icon: <HomeOutlinedIcon />,
  },
  {
    path: "/dashboard/employee",
    name: "Employee List",
    icon: <PeopleOutlinedIcon />,
  },
  {
    path: "/dashboard/lineManager",
    name: "Line Manager Portal",
    icon: <SupervisorAccountIcon />,
  },
  {
    path: "/dashboard/projects",
    name: "Projects",
    icon: <TaskIcon />,
  },
  {
    path: "/dashboard/profile",
    name: "Profile",
    icon: <PortraitIcon />,
  },
  {
    path: "/",
    name: "Logout",
    icon: <Logout />,
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
