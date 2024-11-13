import React from "react";
import DestinationCard from "./DestinationCard";

function Destinations({ destinations }) {
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
