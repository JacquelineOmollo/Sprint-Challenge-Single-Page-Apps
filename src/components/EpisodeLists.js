import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodesCard from "../components/EpisodesCard";

function EpisodesList() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    setShows([]);

    axios
      .get(" https://rickandmortyapi.com/api/episode/")
      .then(response => {
        console.log(response.data);
        setShows(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section>
      {shows.map(item => (
        <EpisodesCard
          name={item.name}
          air_date={item.air_date}
          episode={item.episode}
          number={item.id}
        />
      ))}
    </section>
  );
}

export default EpisodesList;
