import React from "react";
import {Switch, Route} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import Skills from "./pages/Skills";
import Expectation from "./pages/Expectation";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path={['/','/dashboard']} exact component={DashboardPage} />
        <Route path='/projects' exact component={ProjectsPage} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/expectation' exact component={Expectation} />
      </Switch>
    </>
  );
}

export default App;
