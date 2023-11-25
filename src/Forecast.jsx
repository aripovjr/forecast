import React from 'react';
import style from './Forecast.module.css';
import InputCity from './InputCity';
import { useSelector } from 'react-redux';

function Forecast() {
    const forecastData = useSelector((state) => state.forecast.data);

    return (
        <div className={style.ForecastContainer}>
            {forecastData ? (
                <div className={style.forecastDetails}>
                    <h2>City: {forecastData.city.name}</h2>
                    {forecastData.list.length > 0 && (
                        <>
                            <h3> Date: {formatDate(forecastData.list[0].dt_txt)}</h3>
                            <h3> Temperature: {Math.round(forecastData.list[0].main.temp - 273.15)}°C</h3>
                            <h3> Description: {forecastData.list[0].weather[0].description}</h3>
                        </>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <InputCity />
        </div>
    );
}

function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

export default Forecast;
