import React from "react";
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/projects' exact component={ProjectsPage} />
        <Route path='/projects/project-id' exact component={ProjectDetailPage} />
      </Switch>
    </>
  );
}

export default App;
