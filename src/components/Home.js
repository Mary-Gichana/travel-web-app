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
          today!.With this App you can be able to view and toggle destinations
          that you have visited and those you have not visited,You can delete a
          destination from the destination list and also add a new destination.
        </p>
        <div className="img-2">
          <div className="imgcard">
            <img
              src="https://cdn.pixabay.com/photo/2017/05/08/15/11/capetown-2295679_1280.jpg"
              alt="image-4"
            />
            <p>beautiful oceans</p>
          </div>
          <div className="imgcard">
            <img
              src="https://cdn.pixabay.com/photo/2024/09/13/17/05/beach-9045462_1280.jpg"
              alt="image-5"
            />
            <p>beautiful scenery</p>
          </div>
          <div className="imgcard">
            <img
              src="https://cdn.pixabay.com/photo/2022/06/06/21/58/bird-7247045_1280.jpg"
              alt="image-6"
            />
            <p>beautiful birds</p>
          </div>
          <div className="imgcard">
            <img
              src="https://cdn.pixabay.com/photo/2019/09/29/20/29/capetown-4514288_1280.jpg"
              alt="image-7"
            />
            <p>Awesome animals</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
