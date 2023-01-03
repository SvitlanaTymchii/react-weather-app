import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log("---------------");
    setTemperature(Math.round(response.data.temperature.current));
    console.log(temperature);
  }
  const apiKey = "4a9562b441206e7789dda73f03odae5t";
  let city = "Lisbon";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary
            w-100"
            />
          </div>
        </div>
      </form>
      <h1>{city}</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy </li>
      </ul>

      <div className="row">
        <div className="col-6 ">
          <div className="row">
            <div className="col-6 ">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Weather"
              />
            </div>
            <div className="col-4 ">
              <span className="temperature ">{temperature}</span>
            </div>
            <div className="col-2 ">
              <span className="units ">ºC</span>
            </div>
          </div>
        </div>

        <div className="col-6 ">
          <ul className="description">
            <li>Опади: 3%</li>
            <li>Вологість: 93% </li>
            <li>Вітер: 6 км/год</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
