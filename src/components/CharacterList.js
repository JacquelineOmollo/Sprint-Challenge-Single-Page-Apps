import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import axios from "axios";

export default function CharacterList() {
  const [rmcharacters, setCharcters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data);
        setCharcters(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {rmcharacters.map(items => (
        <CharacterCard
          img={items.image}
          name={items.name}
          species={items.species}
          gender={items.gender}
          status={items.status}
          number={items.id}
        />
      ))}
    </section>
  );
}
