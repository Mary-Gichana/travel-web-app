import React, { useState } from "react";

function NewDestinationForm({ handleAddDestination }) {
  const [newDestinationData, setnewDestinationData] = useState({
    name: "",
    image: "",
    description: "",
  });
  function handleInputChange(e) {
    const { name, value } = e.target;
    setnewDestinationData({ ...newDestinationData, [name]: value });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/destinations", {
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
    <div className="new-destination-form">
      <h2>New Destination</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Destination name"
          value={newDestinationData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newDestinationData.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={newDestinationData.description}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default NewDestinationForm;
