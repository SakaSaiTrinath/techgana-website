import React, {useState} from "react";
import {Grid, Header, Icon, Modal, Button, Form} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {blue} from "../constants";
import CoursesTab from "../components/CoursesTab";

function ResourceCoursesPage() {
  const [statsModalOpen, setStatsModalOpen] = useState(false);
  const [pjModalOpen, setPjModalOpen] = useState(false);
  const gridStyle = {
    padding: "1rem",
    paddingTop: "4rem",
    marginTop: 0,
  };

  const linkStyle = {
    marginTop: "-2rem",
  };

  const pjItems = [
    {
      header: "Egghead.io: The Beginner’s Guide to ReactJS",
      description:
        "Free course for React newbies and those looking to get a better understanding of React fundamentals.",
      meta: "Reactjs",
      href: "https://egghead.io/courses/the-beginner-s-guide-to-react",
      likes: 2000,
      dislikes: 10,
    },
    {
      header: "Free React Bootcamp by tylermcginnis",
      description: "Recordings from three days of a free online React bootcamp.",
      meta: "Reactjs",
      href: "https://tylermcginnis.com/free-react-bootcamp/",
      likes: 5000,
      dislikes: 20,
    },
  ];

  const techOptions = [
    {key: "reactjs", text: "Reactjs", value: "reactjs"},
    {key: "nodejs", text: "Nodejs", value: "nodejs"},
    {key: "android", text: "Android", value: "android"},
  ];

  return (
    <Grid style={gridStyle} stackable>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Header as='h2' content='React' color='blue' />
          <Header as='h6' floated='left' style={linkStyle}>
            <Link to='/resources' style={{color: blue}}>
              <Icon name='angle left' />
              Back to Resources
            </Link>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Modal
            trigger={
              <Button
                onClick={() => setPjModalOpen(true)}
                floated='right'
                content='Add new course'
                icon='add'
                color='blue'
                size='small'
              />
            }
            open={pjModalOpen}
          >
            <Modal.Content>
              <Modal.Description>
                <Header>Add New Course</Header>
                <Form>
                  <Form.Input fluid label='Course Title' placeholder='Course Title' />
                  <Form.TextArea
                    label='Course Description'
                    placeholder='Tell us more about this course...'
                  />
                  <Form.Select
                    fluid
                    label='Technologies teach in this course'
                    options={techOptions}
                  />
                  <Form.Input fluid label='Course link' placeholder='Course link' />
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='violet' onClick={() => setPjModalOpen(false)}>
                <Icon name='remove' /> Cancel
              </Button>
              <Button color='blue' onClick={() => setPjModalOpen(false)}>
                <Icon name='checkmark' /> Add
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
      <Grid.Row>
        <Grid.Column>
          <CoursesTab items={pjItems} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ResourceCoursesPage;
