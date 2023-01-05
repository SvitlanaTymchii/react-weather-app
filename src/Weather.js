import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      city: response.data.city,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.dt * 1000),
    });
    setTime(response.data.time);
    setDay(response.data.time);
  }

  if (ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            {day} {time}
          </li>
          <li className="text-capitalize">{weatherData.description} </li>
        </ul>
        <div className="row">
          <div className="col-5 ">
            <div className="row ">
              <div className="col-5 ">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </div>
              <div className="col-4 ">
                <span className="temperature ">{weatherData.temperature}</span>
                <span className="units align-top ">ºC</span>
              </div>
            </div>
          </div>

          <div className="col-6 ">
            <ul className=" description ">
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4a9562b441206e7789dda73f03odae5t";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    let now = new Date(); // нова змінна формату дати
    let currentDay = now.getDay();
    let currentMonth = now.getMonth();
    let currentHours = now.getHours();
    let currentMin = now.getMinutes();
    if (currentMin < 10) {
      currentMin = "0" + currentMin;
    }
    console
      .log
      //currentDay," ",
      // currentMonth,
      // "  ",
      //currentHours,
      //"     ",
      //currentMin
      ();

    return "Loading...";
  }
}
