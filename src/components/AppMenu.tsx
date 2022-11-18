import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Image, Input } from "semantic-ui-react";

const AppMenu = () => {
  return (
    <Menu fixed="top">
      <Menu.Item as="a" header>
        <Image
          size="mini"
          src="/logo192.png"
          style={{ marginRight: "1.5em" }}
        />
        NASA Near Earth Objects
      </Menu.Item>
      <Menu.Item
        name="feed"
        // active={activeItem === "editorials"}
      >
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item
        name="browse"
        // active={activeItem === "reviews"}
      >
        <Link to="/browse">Browse</Link>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>

        <Dropdown pointing className="icon link item" icon="cog">
          <Dropdown.Menu>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>About</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

export default AppMenu;
