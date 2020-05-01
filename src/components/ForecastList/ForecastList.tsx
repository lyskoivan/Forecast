import React from 'react';

import './ForecastList.scss';

import ForecastListItem from '../ForecastListItem';
import { CityWeather } from '../../redux/forecast/forecastTypes';

interface ForecastList {
  forecastList: CityWeather[];
}

const ForecastList = ({ forecastList }: ForecastList): JSX.Element => (
  <ul className="ForecastList">
    {forecastList.map(
      (item): JSX.Element => (
        <ForecastListItem key={item.dt} forecast={item} />
      ),
    )}
  </ul>
);

export default ForecastList;
