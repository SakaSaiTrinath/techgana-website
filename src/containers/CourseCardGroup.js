import React from "react";
import {Card, Button, Icon} from "semantic-ui-react";
import PropTypes from "prop-types";

/* return <Card.Group doubling centered={false} items={items} stackable />; */
function CourseCardGroup({items}) {
  return (
    <Card.Group stackable>
      {items.map(item => (
        <Card key={item.header} link raised fluid href={item.href} target='_blank'>
          <Card.Content>
            <Button.Group floated='right'>
              <Button color='blue'>
                <Icon name='thumbs up' />
                {item.likes}
              </Button>
              <Button color='violet'>
                <Icon name='thumbs down' />
                {item.dislikes}
              </Button>
            </Button.Group>
            <Card.Header>{item.header}</Card.Header>
            <Card.Meta>{item.meta}</Card.Meta>
            <Card.Description>{item.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

CourseCardGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CourseCardGroup;
