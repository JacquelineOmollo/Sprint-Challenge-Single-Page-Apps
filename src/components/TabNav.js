import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
// import WelcomePage from "../components/WelcomePage";
// import EpisodesCard from "../components/EpisodesCard";
// import CharacterList from "../components/CharacterList";
// import LocationCard from "../components/LocationCard";
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
// const panes = [
//   {
//     menuItem: "Home Page",
//     render: () => (
//       <Tab.Pane>
//         <Route exact path="/" component={WelcomePage} />
//       </Tab.Pane>
//     )
//   },
//   {
//     menuItem: "Characters",
//     render: () => (
//       <Tab.Pane>
//         {" "}
//         <Route path="/characters" component={CharacterList} />
//       </Tab.Pane>
//     )
//   },
//   { menuItem: "Locations", render: () => <Tab.Pane>{LocationCard}</Tab.Pane> },
//   { menuItem: "Episodes", render: () => <Tab.Pane>{EpisodesCard}</Tab.Pane> }
// ];

// const TabExampleBasic = () => <Tab panes={panes} renderActiveOnly={false} />;

// export default TabExampleBasic;

export default TabNav;
