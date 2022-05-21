import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfos";

export default function Weather(props) {
  let [weatherData, SetWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    SetWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "b2481b4823de47d81b7eeb0043f00d82";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return "LOADING......";
  }
}
