import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../layout/topbar/Topbar";
import Sidebar from "../layout/sidebar/Sidebar";
import Dashboard from "../dashboard/index";
import EmployeeList from "../employeeList";
import AddEmployee from "../addEmployee/index";
import Profile from "../profile/index";
import Login from "../login/index";
import AddProject from "../addProject";
import ProjectList from "../projectsList";
import LineManagerList from "../lineManagerPortal/lineManagerList";
import { ColorModeContext, useMode } from "../../theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function MainDashboard() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employee" element={<EmployeeList />} />
                <Route path="/addEmployee" element={<AddEmployee />} />
                <Route path="/lineManager" element={<LineManagerList />} />
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/addProject" element={<AddProject />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
}

export default MainDashboard;
