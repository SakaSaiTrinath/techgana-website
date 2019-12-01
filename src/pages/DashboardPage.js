import React from "react";
import {Grid, Header, Tab, Menu, Label, Button, Icon} from "semantic-ui-react";
import NavBar from "../components/NavBar";
import ProjectsTab from "../components/ProjectsTab";

function DashboardPage() {
  const gridStyle = {
    padding: "1rem",
    paddingTop: "4rem",
    marginTop: 0,
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

  const cpItems = [
    {
      header: "Swagger Easy",
      description: "This makes swagger writing files easier.",
      meta: "Reactjs, Redux",
      link: true,
      raised: true,
      extra,
    },
    {
      header: "TechGana Website",
      description: "Website for techgana community.",
      meta: "Reactjs, Nodejs, Redux, MongoDB, Semantic UI",
      link: true,
      raised: true,
      extra,
    },
    {
      header: "Twitter Clone",
      description: "Clone for twitter.",
      meta: "PHP, .Net",
      link: true,
      raised: true,
      extra,
    },
    {
      header: "Facebook Clone",
      description: "Clone for facebook.",
      meta: "Reactjs, GraphQL",
      link: true,
      raised: true,
      extra,
    },
  ];

  const pjItems = [
    {
      header: "Swagger Easy",
      description: "This makes swagger writing files easier.",
      meta: "Reactjs, Redux",
      link: true,
      extra,
    },
    {
      header: "TechGana Website",
      description: "Website for techgana community.",
      meta: "Reactjs, Nodejs, Redux, MongoDB, Semantic UI",
      link: true,
      extra,
    },
  ];

  const panes = [
    {
      menuItem: (
        <Menu.Item key='created-projects'>
          My Created Projects
          <Label color='blue'>{cpItems.length}</Label>
        </Menu.Item>
      ),
      render: () => <ProjectsTab items={cpItems} />,
    },
    {
      menuItem: (
        <Menu.Item key='joined-projects'>
          Joined Projects
          <Label color='blue'>{pjItems.length}</Label>
        </Menu.Item>
      ),
      render: () => <ProjectsTab items={pjItems} />,
    },
  ];

  return (
    <>
      <NavBar />
      <Grid style={gridStyle}>
        <Grid.Row textAlign='center'>
          <Grid.Column>
            <Header as='h2' content='Dashboard' color='blue' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column>
            <Tab panes={panes} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default DashboardPage;
