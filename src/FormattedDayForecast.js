import React from "react";

export default function FormattedDayForecast(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  //let day = 10;

  return <div>{day}</div>;
}
