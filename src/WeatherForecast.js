import React from "react";
import "./WeatherForecast.css";
import FormattedDayForecast from "./FormattedDayForecast";

export default function WeatherForecast(props) {
  let elements = ["one", "two", "three"];
  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast-day">
        <div className="row">
          {props.data.map(function (element, index) {
            return (
              <div className="col-2">
                <div key={index}>
                  <div className="WeatherForecast-day-name">
                    <FormattedDayForecast date={element.date} />
                  </div>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
/*

Worked!!!
export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">dfhghkjhf</div>
        <div className="col">dfhghkjhf</div>
        <div className="col">dfhghkjhf</div>
        <div className="col">dfhghkjhf</div>
        <div className="col">dfhghkjhf</div>
      </div>

      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            {props.data.map(function (element, index) {
              return (
                <div key={index}>
                  <div className="WeatherForecast-day-name">
                    <FormattedDayForecast date={element.date} />
                  </div>
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
      </div>
    </div>
  );
}


*/
//
