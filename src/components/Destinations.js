import React, { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";
import NewDestinationForm from "./NewDestinationForm";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.log(error));
  }, []);

  function handleAddDestination(newDestination) {
    setDestinations([...destinations, newDestination]);
  }
  return (
    <>
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
      <NewDestinationForm handleAddDestination={handleAddDestination} />
    </>
  );
}

export default Destinations;
