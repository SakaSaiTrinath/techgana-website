import React from "react";
import {Card, Image} from "semantic-ui-react";
import PropTypes from "prop-types";

function ResourceCardGroup({items}) {
  return (
    <Card.Group doubling itemsPerRow={4} centered={false} stackable>
      {items.map(item => (
        <Card
          key={item.header}
          link={item.link}
          raised={item.raised}
          as={item.as}
          to={item.to}
        >
          <Card.Content>
            <Image style={{maxHeight: "180px"}} src={item.image} />
          </Card.Content>
          <Card.Content extra>
            <Card.Header>{item.header}</Card.Header>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

ResourceCardGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResourceCardGroup;
