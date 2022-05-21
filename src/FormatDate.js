import React from "react";

export default function FormatDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.timestamp.getDay()];
  let hours = props.timestamp.getHours();
  let minutes = props.timestamp.getMinutes();
  console.log(new Date(props.timestamp));
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormatDate">
      {day}, {hours}:{minutes}
    </div>
  );
}
