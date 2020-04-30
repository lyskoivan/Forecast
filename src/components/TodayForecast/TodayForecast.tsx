import React from 'react';
import { connect } from 'react-redux';

import ForecastList from '../ForecastList';
import { getCurrentWeather } from '../../redux/forecast/forecastSelectors';
import { CityWeather, MainState } from '../../redux/forecast/forecastTypes';

interface TodayForecastStateProps {
  weatherList: CityWeather[];
}

const mapStateToProps = (store: MainState): TodayForecastStateProps => ({
  weatherList: getCurrentWeather(store),
});

const TodayForecast = ({ weatherList }: TodayForecastStateProps): JSX.Element => (
  <section>
    <ForecastList forecastList={weatherList} />
  </section>
);

export default connect(mapStateToProps, null)(TodayForecast);
