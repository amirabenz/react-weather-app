import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let apiKey = "b2481b4823de47d81b7eeb0043f00d82";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  function handleResponse(response) {
    console.log(response.data);
  }
  axios.get(url).then(handleResponse);
  return (
    <div className="WeatherForecast row">
      <div className="col day">
        <div className="ForecastDay">Mon</div>
        <WeatherIcon code="01d" size={34} color="#ffc107" />
        <div className="ForcastTemp d-flex justify-content-between">
          <span className="TempMax">19°</span>
          <span className="TempMin">10°</span>
        </div>
      </div>
    </div>
       <div className="WeatherForecast row">
      <div className="col day">
        <div className="ForecastDay">Mon</div>
        <WeatherIcon code="01d" size={34} color="#ffc107" />
        <div className="ForcastTemp d-flex justify-content-between">
          <span className="TempMax">19°</span>
          <span className="TempMin">10°</span>
        </div>
      </div>
    </div>
       <div className="WeatherForecast row">
      <div className="col day">
        <div className="ForecastDay">Mon</div>
        <WeatherIcon code="01d" size={34} color="#ffc107" />
        <div className="ForcastTemp d-flex justify-content-between">
          <span className="TempMax">19°</span>
          <span className="TempMin">10°</span>
        </div>
      </div>
    </div>
  );
}
