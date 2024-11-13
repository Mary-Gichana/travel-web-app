import React, { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  useEffect(
    () =>
      fetch("http://localhost:3000/destinations")
        .then((response) => response.json())
        .then((data) => setDestinations(data))
        .catch((error) => console.log(error)),
    []
  );
  return (
    <ul className="cards">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          name={destination.name}
          image={destination.image}
          description={destination.description}
        />
      ))}
    </ul>
  );
}

export default Destinations;
