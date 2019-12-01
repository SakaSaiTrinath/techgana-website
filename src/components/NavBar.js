import React, {useState} from "react";
import {Menu, Header, Dropdown, Image} from "semantic-ui-react";

function NavBar() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (e, {name}) => {
    setActiveItem(name);
  };

  const userOptions = [
    {key: "user", text: "Profile", icon: "user"},
    {key: "logout", text: "Logout", icon: "sign-out"},
  ];

  const style = {
    borderRadius: 0,
  };

  return (
    <Menu pointing inverted color='blue' style={style} fixed='top'>
      <Menu.Item name='Home' onClick={handleItemClick}>
        <Header as='h2' inverted>
          TechGana
        </Header>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item
          name='Projects'
          active={activeItem === "Projects"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Members'
          active={activeItem === "Members"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Resources'
          active={activeItem === "Resources"}
          onClick={handleItemClick}
        />
        <Menu.Item name='avatar'>
          <Dropdown
            trigger={
              <Image src='http://via.placeholder.com/80x80' avatar color='black' />
            }
            options={userOptions}
            pointing='top right'
            icon={null}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default NavBar;
