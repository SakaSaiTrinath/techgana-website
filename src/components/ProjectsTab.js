import React from "react";
import {Tab} from "semantic-ui-react";
import PropTypes from "prop-types";
import {green} from "../constants";
import ProjectCardGroup from "../containers/ProjectCardGroup";

function ProjectsTab({items}) {
  const tabStyle = {
    background: green,
    // borderColor: blue,
    padding: "2rem",
  };

  return (
    <Tab.Pane style={tabStyle}>
      <ProjectCardGroup items={items} />
    </Tab.Pane>
  );
}

ProjectsTab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectsTab;
