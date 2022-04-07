import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="krakow" />
        <footer>
          © Coded by{" "}
          <a
            href="https://www.linkedin.com/in/amira-ben-zid-9b9451223/"
            target="_blank noreferrer"
          >
            Amira Benzid
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/amirabenz/react-weather-app"
            target="_blank noreferrer"
          >
            opened-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
