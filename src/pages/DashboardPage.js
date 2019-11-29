import React from "react";
import {Grid, Header, Tab, Menu, Label} from "semantic-ui-react";
import NavBar from "../components/NavBar";
import {green, blue} from "../constants";

function DashboardPage() {
  const gridStyle = {
    padding: "1rem",
    paddingTop: "4rem",
    marginTop: 0,
  };

  const tabStyle = {
    background: green,
    borderColor: blue,
  };

  const panes = [
    {
      menuItem: (
        <Menu.Item key='created-projects'>
          My Created Projects
          <Label color='blue'>5</Label>
        </Menu.Item>
      ),
      render: () => <Tab.Pane style={tabStyle}>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: (
        <Menu.Item key='joined-projects'>
          Joined Projects
          <Label color='blue'>15</Label>
        </Menu.Item>
      ),
      render: () => <Tab.Pane style={tabStyle}>Tab 2 Content</Tab.Pane>,
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
