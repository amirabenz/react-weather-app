import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfos";
import WeatherForecast from "./WeatherForecast";
import { RingSpinner } from "react-spinner-overlay";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      coords: response.data.coord,
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }
  function search() {
    const apiKey = "b2481b4823de47d81b7eeb0043f00d82";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  function displayCurrentInfos(position) {
    const apiKey = "b2481b4823de47d81b7eeb0043f00d82";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(displayCurrentInfos);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="search"
            className="search-input"
            autoFocus="on"
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-warning current-location"
            onClick={getPosition}
          >
            current location
          </button>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coords} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Loader position-absolute top-50 start-50 translate-middle">
        <RingSpinner loading={true} color="#ffc107" />
      </div>
    );
  }
}
