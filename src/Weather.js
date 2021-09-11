import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function  handleResponse(response) {
        setWeatherData({
            ready: true,
            coord: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,
        });
    }

    function search() {
        const apiKey = "7df5a5dba03362a0ac69b144c09e5d71";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();

    }

    function handleCityChange(event) {
        setCity(event.target.value);

    }

    if (weatherData.ready) {
            return (
        <div className="weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a City..." 
                className="form-control" autoFocus="on" onChange={handleCityChange} />
                    </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                
                </div>
            </form>
           <WeatherInfo data={weatherData} />
           <WeatherForecast coord={weatherData.coord} />
        </div>
    );

    } else {
        search();
        return "Loading...";

    }


 

}