import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);


    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
         return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                    return(
                    <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                    </div>
                    )
                }
                })}
            </div>
        </div>
    )
    } else {
    let apiKey = "7df5a5dba03362a0ac69b144c09e5d71";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  } 
}