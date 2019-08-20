import React from "react";
import { Menu, MenuItem, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const TabNav = () => (
  <header>
    <Menu attached="top" tabular>
      <MenuItem>
        <a>
          <Icon name="home" />
          <NavLink exact to="/">
            Home Page
          </NavLink>
        </a>
      </MenuItem>

      <MenuItem>
        <a>
          <Icon name="group" />
          <NavLink to="/characters">Characters</NavLink>
        </a>
      </MenuItem>
      <MenuItem>
        <a>
          <Icon name="map" />
          <NavLink to="/locations">Locations</NavLink>
        </a>
      </MenuItem>
      <MenuItem>
        <a>
          <Icon name="video camera" />
          <NavLink to="/episodes">Episodes</NavLink>
        </a>
      </MenuItem>
    </Menu>
  </header>
);

export default TabNav;
