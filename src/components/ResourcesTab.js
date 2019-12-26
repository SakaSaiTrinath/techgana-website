import React from "react";
import {Tab} from "semantic-ui-react";
import PropTypes from "prop-types";
import {green} from "../constants";
import ResourceCardGroup from "../containers/ResourceCardGroup";

function ResourcesTab({items}) {
  const tabStyle = {
    background: green,
    // backgroundImage: `repeating-linear-gradient(${green}, ${olive})`,
    // borderColor: blue,
    padding: "2rem",
  };

  return (
    <Tab.Pane style={tabStyle}>
      <ResourceCardGroup items={items} />
    </Tab.Pane>
  );
}

ResourcesTab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResourcesTab;
