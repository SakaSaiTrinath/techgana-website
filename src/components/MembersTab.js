import React, {useState} from "react";
import {Tab, Button, Grid, Modal, Form, Header, Icon} from "semantic-ui-react";
import PropTypes from "prop-types";
import {green} from "../constants";
import MemberCardGroup from "../containers/MemberCardGroup";

function MembersTab({items, type}) {
  const [modalOpen, setModalOpen] = useState(false);
  const tabStyle = {
    background: green,
    // backgroundImage: `repeating-linear-gradient(${green}, ${olive})`,
    // borderColor: blue,
    padding: "2rem",
  };

  return (
    <Tab.Pane style={tabStyle}>
      <Grid>
        {type === "comment" && (
          <Grid.Row>
            <Grid.Column>
              <Modal
                trigger={
                  <Button
                    content='Comment'
                    floated='right'
                    icon='comment'
                    color='blue'
                    onClick={() => setModalOpen(true)}
                  />
                }
                size='small'
                open={modalOpen}
              >
                <Modal.Content>
                  <Modal.Description>
                    <Header>Comment</Header>
                    <Form>
                      <Form.TextArea placeholder='Write comment here.' />
                    </Form>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='violet' onClick={() => setModalOpen(false)}>
                    <Icon name='remove' /> Cancel
                  </Button>
                  <Button color='blue' onClick={() => setModalOpen(false)}>
                    <Icon name='checkmark' /> Comment
                  </Button>
                </Modal.Actions>
              </Modal>
            </Grid.Column>
          </Grid.Row>
        )}
        <Grid.Row>
          <Grid.Column>
            <MemberCardGroup items={items} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Tab.Pane>
  );
}

MembersTab.defaultProps = {
  type: "",
};

MembersTab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string,
};

export default MembersTab;
