import React, { useState } from "react";

function DestinationCard({
  id,
  name,
  image,
  description,
  handleDeleteDestination,
  visited,
}) {
  const [userVisited, setUserVisited] = useState(visited);

  function handleUpdateToggle() {
    const updatedVisited = !userVisited;
    setUserVisited(updatedVisited);

    fetch("http://localhost:3000/destinations", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ visited: updatedVisited }),
    });
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
        <button className="btn-1" onClick={handleUpdateToggle}>
          Visited
        </button>
      ) : (
        <button className="btn-1" onClick={handleUpdateToggle}>
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
