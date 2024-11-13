import React, { useEffect, useState } from "react";
import "./App.css";
import NewDestinationForm from "./components/NewDestinationForm";
import Destinations from "./components/Destinations";
import Home from "./components/Home";

function App() {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.log(error));
  }, []);
  function handleAddDestination(newDestination) {
    setDestinations([...destinations, newDestination]);
  }
  return (
    <div className="App">
      <Home />
      <Destinations destinations={destinations} />
      <NewDestinationForm handleAddDestination={handleAddDestination} />
    </div>
  );
}

export default App;
