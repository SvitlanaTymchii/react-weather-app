import React from "react";

export default function FormattedDayForecast(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];

  return <div>{day}</div>;
}
