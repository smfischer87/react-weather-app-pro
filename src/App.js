import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by Susan Fischer and is{" "}
        <a href="https://github.com/smfischer87/react-weather-app-pro" rel="noreferrer" target="_blank">open-sourced</a>{" "}on Github.
      </footer>
      </div>
    </div>
  );
}

export default App;
