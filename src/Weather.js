import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState("London");
  let [country, setCountry] = useState(null);
  let [temp, SetTemp] = useState(null);
  function handleResponse(response) {
    SetTemp(response.data.main.temp);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <input type="search" placeholder="search" className="search-input" />
          <button type="submit" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-warning current-location"
          >
            current location
          </button>
        </form>

        <div className="actual-city">{city}, PL</div>

        <div className="actual-date">Last updated: Mon 21:53</div>
        <div className="weather-description ">Clear</div>
        <div className="row clearfix">
          <div className="col-2">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
              className="img-icon "
            />
          </div>
          <div className="col-4 temperature-row ">
            <span className="temp ">{temp}</span>
            <div className="degree d-inline">
              <a href="/" className="celsius">
                <strong> °C</strong>
              </a>

              <span className="separator">|</span>
              <a href="/" className="fahrenheit">
                °F
              </a>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Humidity
                <div>
                  <span className="humidity">70</span>%
                </div>
              </li>
              <li>
                Wind
                <div>
                  <span className="wind">6</span>
                  <span className="wind-unit">Km/h</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7a3a06bc53009599c7a0058ddd4c4727";
    let url = `https://api.openweathermap.org/data/2.5/=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return;
  }
}
