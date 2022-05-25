import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfos">
      <div className="actual-city">
        {props.data.city}, {props.data.country}
      </div>

      <div className="actual-date">
        Last updated: <FormatDate timestamp={props.data.date} />
      </div>
      <div className="weather-description text-capitalize">
        {props.data.description}
      </div>
      <div className="row clearfix">
        <div className="col-2 imgIcon">
          <WeatherIcon code={props.data.icon} size={84} color="#ffc107" />
        </div>
        <WeatherTemp temp={props.data.temp} />

        <div className="col-6">
          <ul>
            <li>
              Humidity
              <div>
                <span className="humidity">{props.data.humidity}</span>%
              </div>
            </li>
            <li>
              Wind
              <div>
                <span className="wind">{props.data.wind}</span>
                <span className="wind-unit">Km/h</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
