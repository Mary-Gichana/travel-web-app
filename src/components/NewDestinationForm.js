import React, { useState } from "react";

function NewDestinationForm({ handleAddDestination }) {
  const [newDestinationData, setnewDestinationData] = useState({
    name: "",
    image: "",
    description: "",
  });
  function handleInputChange(e) {
    const { name, value } = e.target;
    setnewDestinationData({
      ...newDestinationData,
      [name]: value,
    });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("https://travel-web-app-json-server.onrender.com/destinations", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newDestinationData),
    })
      .then((response) => response.json())
      .then((newDestination) => {
        handleAddDestination(newDestination);
        setnewDestinationData({
          name: "",
          image: "",
          description: "",
        });
      });
  }

  return (
    <div className="new-destination">
      <h2>New Destination</h2>

      <div className="new-destination-form">
        <form onSubmit={handleFormSubmit}>
          <h3>Add New Destination</h3>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Destination name"
            value={newDestinationData.name}
            onChange={handleInputChange}
          />
          <br />
          <input
            className="input"
            type="text"
            name="image"
            placeholder="Image URL"
            value={newDestinationData.image}
            onChange={handleInputChange}
          />
          <br />
          <input
            className="input"
            type="text"
            name="description"
            placeholder="Description"
            value={newDestinationData.description}
            onChange={handleInputChange}
          />
          <br />
          <button className="btn" type="submit">
            Add Destination
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewDestinationForm;
