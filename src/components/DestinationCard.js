import React, { useState } from "react";

function DestinationCard({ name, image, description }) {
  const [visited, setVisited] = useState(true);

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      <button className="btn-1"></button>
    </li>
  );
}

export default DestinationCard;
