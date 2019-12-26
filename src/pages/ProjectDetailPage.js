import React, {useState} from "react";
import {
  Grid,
  Header,
  Icon,
  Segment,
  Label,
  Button,
  Menu,
  Tab,
  Modal,
  Form,
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {blue} from "../constants";
import MembersTab from "../components/MembersTab";

function ProjectDetailPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const gridStyle = {
    padding: "1rem",
    paddingTop: "4rem",
    marginTop: 0,
  };

  const linkStyle = {
    marginTop: "-2rem",
  };

  const memberItems = [
    {
      link: true,
      raised: true,
      header: "Saka Sai Trinath",
      image: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
      is_author: true,
      as: Link,
      to: "/members/member-id",
      meta: "Reactjs, Redux",
    },
    {
      link: true,
      raised: true,
      header: "Rama Kishore",
      image: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",
      is_author: false,
      as: Link,
      to: "/members/member-id",
      meta: "Reactjs, Redux",
    },
  ];

  const commentItems = [
    {
      header: "Saka Sai Trinath",
      description: "Really a good project to work on. Recommend for juniors.",
      image: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
      is_author: true,
      as: Link,
      to: "/members/member-id",
      meta: "15-10-2019 12:30",
      link: true,
      raised: true,
    },
    {
      header: "Rama Kishore",
      description: "Keep up the good work!",
      image: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",
      is_author: false,
      as: Link,
      to: "/members/member-id",
      meta: "15-10-2019 12:30",
      link: true,
      raised: true,
    },
  ];

  const panes = [
    {
      menuItem: (
        <Menu.Item key='Members'>
          Members
          <Label color='blue'>{memberItems.length}</Label>
        </Menu.Item>
      ),
      render: () => <MembersTab items={memberItems} />,
    },
    {
      menuItem: (
        <Menu.Item key='Comments'>
          Comments
          <Label color='blue'>{commentItems.length}</Label>
        </Menu.Item>
      ),
      render: () => <MembersTab items={commentItems} type='comment' />,
    },
  ];

  return (
    <Grid style={gridStyle} stackable>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Header as='h2' content='TechGana Website' color='blue' />
          <Header as='h6' floated='left' style={linkStyle}>
            <Link to='/projects' style={{color: blue}}>
              <Icon name='angle left' />
              Back to Projects
            </Link>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            This project is a website for TechGana community. It facilitates the community
            members to search, guide and do projects.
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>
          <Header as='h3' content='Technologies: ' />
        </Grid.Column>
        <Grid.Column width={11}>
          <Label.Group color='violet'>
            <Label>Reactjs</Label>
            <Label>Nodejs</Label>
            <Label>MongoDB</Label>
            <Label>Redux</Label>
            <Label>Semantic UI</Label>
          </Label.Group>
        </Grid.Column>
        <Grid.Column width={3} floated='right'>
          <Modal
            trigger={
              <Button color='blue' onClick={() => setModalOpen(true)}>
                <Icon name='add' />
                Join this project
              </Button>
            }
            open={modalOpen}
          >
            <Modal.Content>
              <Modal.Description>
                <Header>Join this project</Header>
                <Form>
                  <Form.Input
                    fluid
                    label='Objective to join'
                    placeholder='Learn or Enhance or Guide or Other'
                  />
                  <Form.TextArea
                    label='What do you wanna do in this project'
                    placeholder='A detail one.'
                  />
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='violet' onClick={() => setModalOpen(false)}>
                <Icon name='remove' /> Cancel
              </Button>
              <Button color='blue' onClick={() => setModalOpen(false)}>
                <Icon name='checkmark' /> Join
              </Button>
            </Modal.Actions>
          </Modal>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header as='h3' content='Project Repository Link:' />
        </Grid.Column>
        <Grid.Column width={13}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            style={{color: blue}}
            href='http://github.com/SakaSaiTrinath/swagger-easy'
          >
            http://github.com/SakaSaiTrinath/swagger-easy
          </a>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Tab panes={panes} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ProjectDetailPage;
