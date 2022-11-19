import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Dropdown, Image, Input, Form } from "semantic-ui-react";
import {
  AppContext,
  AppContextDefaultValue,
} from "../providers/AppContextProvider";
import { lookupLink } from "./lookupLink";

const AppMenu = () => {
  const navigate = useNavigate();
  const { show, setShow } = useContext(AppContext);
  // FIXME: Form validation, min char and number only? to chech...
  const [search, setSearch] = useState<string>("");

  const handleFormSubmit = () => {
    if (search.length > 5) navigate(lookupLink(search));
    // Maybe use Axios here and link only if found
  };
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
          <Form onSubmit={handleFormSubmit}>
            <Input
              icon="search"
              placeholder="Search by ID"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Form>
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
