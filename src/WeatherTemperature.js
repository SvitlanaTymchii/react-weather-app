import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenhait(event) {
    event.preventDefault();
    setUnit("fahrenhait");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature ">{props.celsius} </span>
        <span className="units align-top ">
          ºC|
          <a href="/" onClick={convertToFahrenhait}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenhait = Math.round(props.celsius * 1.8 + 32);

    return (
      <div className="weatherTemperature">
        <span className="temperature ">{fahrenhait} </span>
        <span className="units align-top ">
          <a href="/" onClick={convertToCelsius}>
            ºC
          </a>
          |ºF
        </span>
      </div>
    );
  }
}
