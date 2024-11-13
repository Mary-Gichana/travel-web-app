import React, { useEffect, useState } from "react";
import "./App.css";
import NewDestinationForm from "./components/NewDestinationForm";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

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
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/destinations"
            element={<Destinations destinations={destinations} />}
          />
          <Route
            path="/new-destination"
            element={
              <NewDestinationForm handleAddDestination={handleAddDestination} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
