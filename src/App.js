import React from "react";
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/projects' exact component={ProjectsPage} />
      </Switch>
    </>
  );
}

export default App;
