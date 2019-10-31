import React, { useState } from "react";
import { Grid, Menu, Header } from "semantic-ui-react";
import "./App.css";

function App() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Menu pointing>
              <Menu.Item>
                <Header as="h2">TechGana</Header>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item
                  name="Home"
                  active={activeItem === "Home"}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="Projects"
                  active={activeItem === "Projects"}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="Members"
                  active={activeItem === "Members"}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="Resources"
                  active={activeItem === "Resources"}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="My Profile"
                  active={activeItem === "My Profile"}
                  onClick={handleItemClick}
                />
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
