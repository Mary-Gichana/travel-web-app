import React, { useState } from "react";

function DestinationCard({
  id,
  name,
  image,
  description,
  handleDeleteDestination,
}) {
  const [visited, setVisited] = useState(false);

  function handleToggle() {
    setVisited(!visited);
  }
  function handleDelete() {
    handleDeleteDestination(id);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      {visited ? (
        <button className="btn-1" onClick={handleToggle}>
          Visited
        </button>
      ) : (
        <button className="btn-1" onClick={handleToggle}>
          Not visited
        </button>
      )}
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default DestinationCard;
