import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import { RingSpinner } from "react-spinner-overlay";

export default function WeatherForecast(props) {
  let apiKey = "b2481b4823de47d81b7eeb0043f00d82";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  let [forecast, setForecast] = useState(null);
  let [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    console.log(forecast);
    return (
      <div className="WeatherForecast row">
        {forecast.map((day, index) => {
          if (index < 6) {
            return <ForecastDay dayInfos={day} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    axios.get(url).then(handleResponse);
    return (
      <div className="Loader position-absolute top-50 start-50 translate-middle">
        <RingSpinner loading={true} color="#ffc107" />
      </div>
    );
  }
}
