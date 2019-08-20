import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

function LocationsList() {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    setLocation([]);

    axios
      .get(" https://rickandmortyapi.com/api/location/ ")
      .then(response => {
        console.log(response.data);
        setLocation(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <div className="character-list grid-view">
      {location.map(item => (
        <LocationCard
          name={item.name}
          type={item.type}
          dimension={item.dimension}
          residents={item.residents}
        />
      ))}
    </div>
  );
}

export default LocationsList;
