import React, { useState } from "react";

function NewDestinationForm({ handleAddDestination }) {
  const [newDestination, setnewDestination] = useState({
    name: "",
    image: "",
    description: "",
  });

  return (
    <div className="new-destination-form">
      <h2>New Destination</h2>
      <form>
        <input />
        <input />
        <input />
      </form>
    </div>
  );
}

export default NewDestinationForm;
