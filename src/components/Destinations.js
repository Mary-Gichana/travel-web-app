import React from "react";
import DestinationCard from "./DestinationCard";
import Navbar from "./Navbar";

function Destinations({ destinations, handleDeleteDestination }) {
  return (
    <div className="container">
      <Navbar />
      <h2>Destinations</h2>
      <ul className="cards">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            name={destination.name}
            image={destination.image}
            description={destination.description}
            visited={destination.visited}
            handleDeleteDestination={handleDeleteDestination}
          />
        ))}
      </ul>
    </div>
  );
}

export default Destinations;
