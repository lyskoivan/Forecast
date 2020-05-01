import React from 'react';

import './ForecastListItem.scss';

import { CityWeather } from '../../redux/forecast/forecastTypes';

const getIcon = (icon = ''): string => `https://openweathermap.org/img/wn/${icon}@2x.png`;

interface ForecastListItem {
  forecast: CityWeather;
}

const ForecastListItem = ({ forecast }: ForecastListItem): JSX.Element => (
  <article className="ForecastListItem">
    <div className="ForecastListItem-wrapper">
      <div className="ForecastListItem-main">
        <img alt={forecast.weather[0].main} src={getIcon(forecast.weather[0].icon)} />
        <p>{`${forecast.main.temp} °C`}</p>
      </div>
      <h2 className="ForecastListItem-date">{forecast.dt_txt}</h2>
    </div>
    <div className="ForecastListItem-stat">
      <p className="ForecastListItem-stat-text">{`Min: ${forecast.main.temp_min}°`}</p>
      <p className="ForecastListItem-stat-text">{`Max: ${forecast.main.temp_max}°`}</p>
      <p className="ForecastListItem-stat-text">{`Feels: ${forecast.main.feels_like}°`}</p>
      <p className="ForecastListItem-stat-text">{`Humidity: ${forecast.main.humidity}%`}</p>
    </div>
  </article>
);

export default ForecastListItem;
