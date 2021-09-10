import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }


    let apiKey = "7df5a5dba03362a0ac69b144c09e5d71";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                        Thu
                    </div>
                    <WeatherIcon code={"01d"} size={36} />
                    <div className="WeatherForecast-temperatures">
                        <span className="temp-max">19°</span>
                        <span className="temp-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}