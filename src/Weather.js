import React, { useState } from "react";
import "./Weather.css";

import axios from "axios";
import WeatherInfo from "./WeatherInfo";
//import WeatherForecast from "./WeatherForecast";
//import FormattedDayForecast from "./FormattedDayForecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    //console.log("Hello, current data", response.data);
    setReady(true);
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      city: response.data.city,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  let [city, setCity] = useState(props.defaultCity);

  //const [forecastData, setForecastData] = useState(null);
  /*
  function handleResponseForecast(response) {
    setForecastData([
      {
        iconUrl: response.data.daily[1].condition.icon_url,
        alt: response.data.daily[1].condition.icon,
        temperatureMax: Math.round(response.data.daily[1].temperature.maximum),
        temperatureMin: Math.round(response.data.daily[1].temperature.minimum),
        date: new Date(response.data.daily[1].time * 1000),
      },
      {
        iconUrl: response.data.daily[2].condition.icon_url,
        alt: response.data.daily[2].condition.icon,
        temperatureMax: Math.round(response.data.daily[2].temperature.maximum),
        temperatureMin: Math.round(response.data.daily[2].temperature.minimum),
        date: new Date(response.data.daily[2].time * 1000),
      },
      {
        iconUrl: response.data.daily[3].condition.icon_url,
        alt: response.data.daily[3].condition.icon,
        temperatureMax: Math.round(response.data.daily[3].temperature.maximum),
        temperatureMin: Math.round(response.data.daily[3].temperature.minimum),
        date: new Date(response.data.daily[3].time * 1000),
      },
      {
        iconUrl: response.data.daily[4].condition.icon_url,
        alt: response.data.daily[4].condition.icon,
        temperatureMax: Math.round(response.data.daily[4].temperature.maximum),
        temperatureMin: Math.round(response.data.daily[4].temperature.minimum),
        date: new Date(response.data.daily[4].time * 1000),
      },
      {
        iconUrl: response.data.daily[5].condition.icon_url,
        alt: response.data.daily[5].condition.icon,
        temperatureMax: Math.round(response.data.daily[5].temperature.maximum),
        temperatureMin: Math.round(response.data.daily[5].temperature.minimum),
        date: new Date(response.data.daily[5].time * 1000),
      },
    ]);
  }*/

  function search() {
    const apiKey = "4a9562b441206e7789dda73f03odae5t";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    // let apiUrlForForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
    //axios.get(apiUrlForForecast).then(handleResponseForecast);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
//<WeatherForecast data={forecastData} />

/*

<div className="row">
          <div className="col-2">
            {forecastData.map(function (element, index) {
              return (
                <div key={index}>
                  <FormattedDayForecast date={element.date} />

                  <img src={element.iconUrl} alt={element.icon} />
                  <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">
                      {element.temperatureMax}º
                    </span>
                    <span className="WeatherForecast-temperature-min">
                      {element.temperatureMin}º
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
*/
