import React from "react";
import {Card} from "semantic-ui-react";
import PropTypes from "prop-types";

function ProjectCardGroup({items}) {
  return <Card.Group doubling itemsPerRow={4} centered={false} items={items} stackable />;
}

ProjectCardGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectCardGroup;
