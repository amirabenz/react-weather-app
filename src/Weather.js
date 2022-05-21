import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  let [weatherData, SetWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    SetWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      date: response.data.dt * 1000,
      description: response.data.weather[0].main,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="search"
            className="search-input"
            autoFocus="on"
          />
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

        <div className="actual-city">
          {weatherData.city}, {weatherData.country}
        </div>

        <div className="actual-date">
          Last updated: <FormatDate timestamp={new Date(weatherData.date)} />
        </div>
        <div className="weather-description text-capitalize">
          {weatherData.description}
        </div>
        <div className="row clearfix">
          <div className="col-2">
            <img src={weatherData.icon} alt="" className="img-icon " />
          </div>
          <div className="col-4 temperature-row ">
            <span className="temp ">{weatherData.temp}</span>
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
                  <span className="humidity">{weatherData.humidity}</span>%
                </div>
              </li>
              <li>
                Wind
                <div>
                  <span className="wind">{weatherData.wind}</span>
                  <span className="wind-unit">Km/h</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b2481b4823de47d81b7eeb0043f00d82";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return "LOADING......";
  }
}
