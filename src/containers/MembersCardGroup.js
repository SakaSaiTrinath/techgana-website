import React from "react";
import {Card, Image, Label, Popup} from "semantic-ui-react";
import PropTypes from "prop-types";

function MembersCardGroup({items}) {
  return (
    <Card.Group doubling itemsPerRow={4} centered={false} stackable>
      {items.map(item => (
        <Card key={item.header} link={item.link} raised={item.raised}>
          {item.is_author && (
            <Popup
              content='Project Author'
              trigger={<Label corner='right' icon='chess king' color='blue' />}
            />
          )}
          <Card.Content>
            <Image floated='left' size='mini' src={item.image} />
            <Card.Header>{item.header}</Card.Header>
            <Card.Meta>{item.meta}</Card.Meta>
            <Card.Description>{item.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

MembersCardGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MembersCardGroup;
