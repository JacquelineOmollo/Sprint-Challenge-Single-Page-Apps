import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";

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
// const TabNav = () => <Tab panes={panes} />;
// const panes = [
// {
//   menuItem: "Home Page",
//   render: () => <Tab.Pane />
// },
// {
//   menuItem: "Characters",
//   render: () => <Tab.Pane />
// },

// { menuItem: "Locations", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
// { menuItem: "Episodes", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }

// export default TabExampleBasic;
export default TabNav;
