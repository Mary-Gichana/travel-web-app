import React from "react";
import DestinationCard from "./DestinationCard";

function Destinations({ destinations, handleDeleteDestination }) {
  return (
    <div className="container">
      <h2>Destinations</h2>
      <ul className="cards">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            name={destination.name}
            image={destination.image}
            description={destination.description}
            handleDeleteDestination={handleDeleteDestination}
          />
        ))}
      </ul>
    </div>
  );
}

export default Destinations;
