import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const TabNav = () => (
  <header>
    <ul className="main-nav">
      <li>
        <NavLink exact to="/">
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink to="/characters">Characters</NavLink>
      </li>
      <li>
        <NavLink to="/locations">Locations</NavLink>
      </li>
      <li>
        <NavLink to="/episodes">Episodes</NavLink>
      </li>
    </ul>
  </header>
);

export default TabNav;
