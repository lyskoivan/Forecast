import React from 'react';

import { CityWeather } from '../../redux/forecast/forecastTypes';

interface ForecastListItem {
  forecast: CityWeather;
}

const ForecastListItem = ({ forecast }: ForecastListItem): JSX.Element => (
  <article>
    <h2>{forecast.dt_txt}</h2>
    <p>{forecast.main.temp}</p>
  </article>
);

export default ForecastListItem;
