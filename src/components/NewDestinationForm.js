import React, { useState } from "react";

function NewDestinationForm({ handleAddDestination }) {
  const [newDestination, setnewDestination] = useState({
    name: "",
    image: "",
    description: "",
  });
  return <div>NewDestinationForm</div>;
}

export default NewDestinationForm;
