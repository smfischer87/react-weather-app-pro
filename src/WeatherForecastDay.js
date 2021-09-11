import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
    return (
        <div>
            <div className="WeatherForecast-day">
                {day()}
            </div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="temp-max">{Math.round(props.data.temp.max)}°</span>
                <span className="temp-min">{Math.round(props.data.temp.min)}°</span>
            </div>
        </div>
    );
}