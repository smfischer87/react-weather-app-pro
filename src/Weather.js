import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function  handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
        });
    }

    if (weatherData.ready) {
            return (
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a City..." 
                className="form-control" autoFocus="on" />
                    </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    
                      <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="sunny and cloudy" />
                      <span className="temperature">{Math.round(weatherData.temperature)}</span>
                      <span className="unit">°F</span>
                    
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 1%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {Math.round(weatherData.wind)} mph</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    } else {
           const apiKey = "7df5a5dba03362a0ac69b144c09e5d71";
           let city = "New York"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";

    }


 

}