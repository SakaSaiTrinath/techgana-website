import React from "react";
import {Grid, Header, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {blue} from "../constants";

function ProjectsPage() {
  const gridStyle = {
    padding: "1rem",
    paddingTop: "4rem",
    marginTop: 0,
  };

  const linkStyle = {
    marginTop: "-2rem",
  };

  return (
    <Grid style={gridStyle}>
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
    </Grid>
  );
}

export default ProjectsPage;
