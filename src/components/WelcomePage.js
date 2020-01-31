import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const WelcomePage = () => (
  <section className="welcome-page">
    <header>
      {/* <Segment>
      <Dimmer active>
        <Loader size="large">Loading</Loader>
      </Dimmer> */}
      {/* <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
      <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
      <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" /> */}

      {/* <header> */}
      <h1>Welcome to the ultimate fan site!</h1>
      <img
        className="main-img ui centered medium circular image"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="rick"
      />
    </header>
    {/* </Segment> */}
  </section>
);
export default WelcomePage;
