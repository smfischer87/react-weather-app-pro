import React from "react";
import "./weather.css";

export default function Weather() {
    return (
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a City..." 
                className="form-control"/>
                    </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="sunny and cloudy" />
                    73°F
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 1%</li>
                        <li>Humidity: 65%</li>
                        <li>Wind: 6 mph</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}