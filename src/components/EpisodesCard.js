import React from "react";
import { Card, Icon } from "semantic-ui-react";

const EpisodesCard = props => (
  <Card>
    {/* <span className="episode-card"> */}
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <h4>Episode number: {props.number}</h4>
      <p>Air Date: {props.air_date}</p>
      {/* // </span> */}
    </Card.Content>
  </Card>
);

export default EpisodesCard;
