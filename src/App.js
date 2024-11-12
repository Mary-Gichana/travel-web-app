import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Destinations from "./components/Destinations";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Destinations />
    </div>
  );
}

export default App;
