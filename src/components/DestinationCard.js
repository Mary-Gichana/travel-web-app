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
    setUserVisited(!userVisited);

    fetch(`http://localhost:3000/destinations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ visited: !userVisited }),
    })
      .then((response) => response.json())
      .then((updatedDestination) => {
        setUserVisited(updatedDestination.visited);
      })
      .catch((error) => console.error(error));
  }

  function handleDelete() {
    handleDeleteDestination(id);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      {userVisited ? (
        <button className="btn-1" onClick={handleUpdateToggle}>
          Visited
        </button>
      ) : (
        <button className="btn-1" onClick={handleUpdateToggle}>
          Not Visited
        </button>
      )}
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default DestinationCard;
