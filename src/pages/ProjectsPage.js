import React, {useState} from "react";
import {Grid, Header, Button, Icon, Modal, Form} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProjectsTab from "../components/ProjectsTab";

function ProjectsPage() {
  const [pjModalOpen, setPjModalOpen] = useState(false);
  const [statsModalOpen, setStatsModalOpen] = useState(false);
  const gridStyle = {
    padding: "1rem",
    paddingTop: "4rem",
    marginTop: 0,
  };

  const extra = (
    <div className='ui two buttons'>
      <Button color='blue'>
        <Icon name='thumbs up' />
        20
      </Button>
      <Button color='violet'>
        <Icon name='thumbs down' />
        40
      </Button>
    </div>
  );

  const pjItems = [
    {
      header: "Swagger Easy",
      description: "This makes swagger writing files easier.",
      meta: "Reactjs, Redux",
      link: true,
      raised: true,
      as: Link,
      to: "/projects/project-id",
      extra,
    },
    {
      header: "TechGana Website",
      description: "Website for techgana community.",
      meta: "Reactjs, Nodejs, Redux, MongoDB, Semantic UI",
      link: true,
      raised: true,
      to: "/projects/project-id",
      as: Link,
      extra,
    },
  ];

  const techOptions = [
    {key: "reactjs", text: "Reactjs", value: "reactjs"},
    {key: "nodejs", text: "Nodejs", value: "nodejs"},
    {key: "android", text: "Android", value: "android"},
  ];

  return (
    <Grid style={gridStyle}>
      <Grid.Row textAlign='center'>
        <Grid.Column>
          <Header as='h2' content='Projects' color='blue' />
          <Modal
            trigger={
              <Button
                onClick={() => setPjModalOpen(true)}
                floated='right'
                content='Propose Project'
                icon='add'
                color='blue'
                size='small'
              />
            }
            open={pjModalOpen}
          >
            <Modal.Content>
              <Modal.Description>
                <Header>Propose new project</Header>
                <Form>
                  <Form.Input fluid label='Project Title' placeholder='Project Title' />
                  <Form.TextArea
                    label='Project Description'
                    placeholder='Tell us more about your project...'
                  />
                  <Form.Select
                    fluid
                    label='Technologies needed in project'
                    options={techOptions}
                  />
                  <Form.Input
                    fluid
                    label='Github repo link'
                    placeholder='Github repo link'
                  />
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='violet' onClick={() => setPjModalOpen(false)}>
                <Icon name='remove' /> Cancel
              </Button>
              <Button color='blue' onClick={() => setPjModalOpen(false)}>
                <Icon name='checkmark' /> Propose
              </Button>
            </Modal.Actions>
          </Modal>
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
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign='center'>
        <Grid.Column>
          <ProjectsTab items={pjItems} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ProjectsPage;
