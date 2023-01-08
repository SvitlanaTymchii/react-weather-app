import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            <div className="WeatherForecast-day-name"> Thu</div>

            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png"
              alt="forecast"
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19º </span>
              <span className="WeatherForecast-temperature-min">10º</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
