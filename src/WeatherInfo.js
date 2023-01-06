import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description} </li>
      </ul>
      <div className="row">
        <div className="col-5 ">
          <div className="row ">
            <div className="col-5 ">
              <img src={props.data.iconUrl} alt={props.data.description} />
            </div>
            <div className="col-4 ">
              <span className="temperature ">{props.data.temperature}</span>
              <span className="units align-top ">ºC</span>
            </div>
          </div>
        </div>

        <div className="col-6 ">
          <ul className=" description ">
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
