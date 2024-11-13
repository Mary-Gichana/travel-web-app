import React, { useState } from "react";
import Destinations from "./Destinations";

function NewDestinationForm({ handleAddDestination }) {
  const [newDestination, setnewDestination] = useState({
    name: "",
    image: "",
    description: "",
  });
  function handleInputChange(e) {
    const { name, value } = e.target;
    setnewDestination({ ...newDestination, [name]: value });
  }

  return (
    <div className="new-destination-form">
      <h2>New Destination</h2>
      <form>
        <input type="text" name="name" placeholder="Destination name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="description" placeholder="description" />
      </form>
    </div>
  );
}

export default NewDestinationForm;
