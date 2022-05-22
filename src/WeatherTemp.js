import React, { useState } from "react";

export default function WeatherTemp(props) {
  let [unit, setUnit] = useState("celsius");
  function fahrenheit() {
    return (props.temp * 9) / 5 + 32;
  }
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="col-4 temperature-row ">
        <span className="temp ">{props.temp}</span>
        <div className="degree d-inline">
          <span className="celsius">
            <strong> °C</strong>
          </span>

          <span className="separator">|</span>
          <a href="/" className="fahrenheit" onClick={convertToF}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-4 temperature-row ">
        <span className="temp ">{Math.round(fahrenheit())}</span>
        <div className="degree d-inline">
          <a href="/" className="celsius" onClick={convertToC}>
            °C
          </a>

          <span className="separator">|</span>
          <span className="fahrenheit">
            <strong>°F</strong>
          </span>
        </div>
      </div>
    );
  }
}
