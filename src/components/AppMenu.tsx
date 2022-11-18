import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Image, Input } from "semantic-ui-react";
import {
  AppContext,
  AppContextDefaultValue,
} from "../providers/AppContextProvider";

const AppMenu = () => {
  const { show, setShow } = useContext(AppContext);

  return (
    <Menu fixed="top">
      <Menu.Item header>
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
        <Link to="/">Feed</Link>
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
        <Menu.Item
          as="a"
          name="API Key"
          icon="key"
          onClick={() => setShow(!show)}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default AppMenu;
