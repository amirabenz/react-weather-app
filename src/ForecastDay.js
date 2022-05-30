import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function convertTimestamp() {
    let date = new Date(props.dayInfos.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="col day">
      <div className="ForecastDay">{convertTimestamp()}</div>
      <WeatherIcon
        code={props.dayInfos.weather[0].icon}
        size={34}
        color="#ffc107"
      />
      <div className="ForecastTemp d-flex justify-content-between">
        <span className="TempMax">{Math.round(props.dayInfos.temp.max)}°</span>
        <span className="TempMin">{Math.round(props.dayInfos.temp.min)}°</span>
      </div>
    </div>
  );
}
