import React, { useState } from "react";

function DestinationCard({ name, image, description }) {
  const [visited, setVisited] = useState(true);

  function handleToggle() {
    setVisited(!visited);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      {visited ? (
        <button className="btn-1" onClick={handleToggle}>
          visited
        </button>
      ) : (
        <button className="btn-1" onClick={handleToggle}>
          Not visited
        </button>
      )}
      <button className="delete-button">Delete</button>
    </li>
  );
}

export default DestinationCard;
