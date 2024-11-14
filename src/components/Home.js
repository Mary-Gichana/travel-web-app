import React from "react";
import Header from "./Header";

function Home() {
  return (
    <div className="Home">
      <Header />
      <main>
        <h1>Welcome To The Travel App</h1>
        <p>
          Explore beautiful destinations around the world. Start your journey
          today!.With this App you can be able to view and keep track of the
          destinations that you have visited and those you have not visited,You
          can delete a destination from the destination list and also add a new
          destination.
        </p>
      </main>
    </div>
  );
}

export default Home;
