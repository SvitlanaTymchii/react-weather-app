import React from "react";
import "./WeatherForecast.css";
import FormattedDayForecast from "./FormattedDayForecast";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            <div className="WeatherForecast-day-name"> </div>
            <FormattedDayForecast date={props.data.date} />
            <img src={props.data.iconUrl} alt={props.data.icon} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {props.data.temperatureMax}º
              </span>
              <span className="WeatherForecast-temperature-min">
                {props.data.temperatureMin}º
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//
