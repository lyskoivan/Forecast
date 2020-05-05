import { connect } from 'react-redux';
import queryString from 'query-string';
import React, { Component, MouseEvent } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import './WeatherPage.scss';

import WeatherHeader from '../../components/WeatherHeader';
import TodayForecast from '../../components/TodayForecast';
import FutureForecast from '../../components/FutureForecast';
import getWeather from '../../redux/forecast/forecastOperations';
import { MainState, CityWeather, Error } from '../../redux/forecast/forecastTypes';
import { getCurrentWeather, getError, getIsLoading } from '../../redux/forecast/forecastSelectors';

const getCategoryFromLocation = (location: RouteComponentProps['location']): string | string[] =>
  queryString.parse(location.search).city;

interface MatchParams {
  id: string;
}

interface WeatherPageStateProps {
  todayForecast: CityWeather[];
  reduxError: Error;
  isLoading: boolean;
}

const mapStateToProps = (store: MainState): WeatherPageStateProps => ({
  todayForecast: getCurrentWeather(store),
  reduxError: getError(store),
  isLoading: getIsLoading(store),
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

  handleOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const { history } = this.props;

    history.push('/');
  };

  render(): JSX.Element {
    const { match, isLoading, location, reduxError } = this.props;
    const query = getCategoryFromLocation(location);

    return (
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <section className="weather">
            {!reduxError ? (
              <WeatherHeader />
            ) : (
              <h1 className="weather-title">We don&apos;t have a weather forecast for that city.</h1>
            )}
            <div>
              {!reduxError && <h1 className="weather-title">{`Weather forecast of ${query}`}</h1>}
              <button type="button" onClick={this.handleOnClick} className="weather-button">
                Back to search
              </button>
            </div>
            {!reduxError && <Route path={`${match.path}/today`} component={TodayForecast} />}
            {!reduxError && <Route path={`${match.path}/future`} component={FutureForecast} />}
          </section>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
