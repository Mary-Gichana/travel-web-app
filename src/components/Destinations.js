import React, { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  return useEffect(
    () =>
      fetch("http://localhost:3000/destinations")
        .then((response) => response.json())
        .then((data) => setDestinations(data))
        .catch((error) => console.log(error)),
    []
  );
}

export default Destinations;
