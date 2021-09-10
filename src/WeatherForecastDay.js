import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props) {
    return (
        <div>
            <div className="WeatherForecast-day">
                {props.data.dt}
            </div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="temp-max">{Math.round(props.data.temp.max)}°</span>
                <span className="temp-min">{Math.round(props.data.temp.min)}°</span>
            </div>
        </div>
    );
}