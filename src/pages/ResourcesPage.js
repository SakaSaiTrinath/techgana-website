import React, {useState} from "react";
import {Grid, Header, Button, Icon, Modal, Form} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ResourcesTab from "../components/ResourcesTab";

function ResourcesPage() {
  const [statsModalOpen, setStatsModalOpen] = useState(false);
  const [psModalOpen, setPsModalOpen] = useState(false);
  const gridStyle = {
    padding: "1rem",
    paddingTop: "4rem",
    marginTop: 0,
  };

  const resourceItems = [
    {
      link: true,
      raised: true,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      as: Link,
      header: "Node.js",
      to: "/resources/resource-id",
    },
    {
      link: true,
      raised: true,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
      as: Link,
      header: "Python",
      to: "/resources/resource-id",
    },
    {
      link: true,
      raised: true,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      as: Link,
      header: "React",
      to: "/resources/resource-id",
    },
  ];

  return (
    <Grid style={gridStyle}>
      <Grid.Row textAlign='center'>
        <Grid.Column>
          <Header as='h2' content='Resources' color='blue' />
          <Modal
            trigger={
              <Button
                onClick={() => setStatsModalOpen(true)}
                floated='left'
                content='Stats'
                icon='line graph'
                color='blue'
                size='small'
              />
            }
            open={statsModalOpen}
          >
            <Modal.Content>
              <Modal.Description>
                <Header>Statistics</Header>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='violet' onClick={() => setStatsModalOpen(false)}>
                <Icon name='remove' /> Close
              </Button>
            </Modal.Actions>
          </Modal>
          <Modal
            trigger={
              <Button
                onClick={() => setPsModalOpen(true)}
                floated='right'
                content='Add new resource'
                icon='add'
                color='blue'
                size='small'
              />
            }
            open={psModalOpen}
          >
            <Modal.Content>
              <Modal.Description>
                <Header>Add New Resource</Header>
                <Form>
                  <Form.Input fluid label='Resource Title' placeholder='Resource Title' />
                  <Form.Input
                    fluid
                    label='Resource Image Link'
                    placeholder='This should be open licensed to use'
                  />
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='violet' onClick={() => setPsModalOpen(false)}>
                <Icon name='remove' /> Cancel
              </Button>
              <Button color='blue' onClick={() => setPsModalOpen(false)}>
                <Icon name='checkmark' /> Add
              </Button>
            </Modal.Actions>
          </Modal>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign='center'>
        <Grid.Column>
          <ResourcesTab items={resourceItems} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ResourcesPage;
