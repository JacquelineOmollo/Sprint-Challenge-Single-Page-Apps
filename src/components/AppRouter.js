import React from "react";
import { Route, Switch } from "react-router";

import WelcomePage from "../components/WelcomePage";
import LocationsList from "../components/LocationsList";
import CharacterList from "../components/CharacterList";
import EpisodeList from "../components/EpisodeLists";

const AppRouter = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
      <Route path="/episodes" component={EpisodeList} />
    </Switch>
  </div>
);

export default AppRouter;
