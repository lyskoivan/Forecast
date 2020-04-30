import { connect } from 'react-redux';
import queryString from 'query-string';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import getWeather from '../../redux/forecast/forecastOperations';
import { getCurrentWeather } from '../../redux/forecast/forecastSelectors';
import { MainState, CityWeather } from '../../redux/forecast/forecastTypes';

interface MatchParams {
  id: string;
}

const getCategoryFromLocation = (location: RouteComponentProps['location']): string | string[] =>
  queryString.parse(location.search).city;

interface WeatherPageStateProps {
  getCurrentWeather: CityWeather[];
}

const mapStateToProps = (store: MainState): WeatherPageStateProps => ({
  getCurrentWeather: getCurrentWeather(store),
});

const mapDispatchToProps = {
  getWeatherProp: getWeather,
};

interface WeatherPageDispatchProps {
  getWeatherProp: Function;
}

type WeatherPageProps = WeatherPageStateProps & WeatherPageDispatchProps & RouteComponentProps<MatchParams>;

class WeatherPage extends Component<WeatherPageProps, {}> {
  componentDidMount(): void {
    const { location, getWeatherProp } = this.props;
    const query = getCategoryFromLocation(location);

    if (query) {
      getWeatherProp(query.toString());
    }
  }

  render(): JSX.Element {
    return (
      <section>
        <h1>Weather</h1>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
