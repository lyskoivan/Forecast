import React from 'react';
import { connect } from 'react-redux';

import ForecastList from '../ForecastList';
import { getWeekWeather } from '../../redux/forecast/forecastSelectors';
import { CityWeather, MainState } from '../../redux/forecast/forecastTypes';

interface FutureForecastStateProps {
  weatherList: CityWeather[];
}

const mapStateToProps = (store: MainState): FutureForecastStateProps => ({
  weatherList: getWeekWeather(store),
});

const FutureForecast = ({ weatherList }: FutureForecastStateProps): JSX.Element => (
  <section>
    <ForecastList forecastList={weatherList} />
  </section>
);

export default connect(mapStateToProps, null)(FutureForecast);
