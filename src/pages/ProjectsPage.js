import React from "react";
import {Grid, Header, Button, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProjectsTab from "../components/ProjectsTab";

function ProjectsPage() {
  const gridStyle = {
    padding: "1rem",
    paddingTop: "4rem",
    marginTop: 0,
  };

  const buttonStyle = {
    marginTop: "-3rem",
  };

  const extra = (
    <div className='ui two buttons'>
      <Button basic color='green'>
        <Icon name='thumbs up' />
        20
      </Button>
      <Button basic color='violet'>
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
      to: "/projects",
      extra,
    },
    {
      header: "TechGana Website",
      description: "Website for techgana community.",
      meta: "Reactjs, Nodejs, Redux, MongoDB, Semantic UI",
      link: true,
      raised: true,
      to: "/projects",
      as: Link,
      extra,
    },
  ];

  return (
    <Grid style={gridStyle}>
      <Grid.Row textAlign='center'>
        <Grid.Column>
          <Header as='h2' content='Projects' color='blue' />
          <Button
            style={buttonStyle}
            floated='right'
            content='Propose Project'
            icon='add'
            color='blue'
            size='small'
          />
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
