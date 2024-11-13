import React, { useState } from "react";

function NewDestinationForm({ handleAddDestination }) {
  const [newDestination, setnewDestination] = useState({
    name: "",
    image: "",
    description: "",
  });

  return (
    <div className="new-destination-form">
      <h2>New Destiation</h2>
    </div>
  );
}

export default NewDestinationForm;
