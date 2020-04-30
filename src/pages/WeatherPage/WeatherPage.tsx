import { connect } from 'react-redux';
import queryString from 'query-string';
import React, { Component, MouseEvent } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import routes from '../../routes/routes';
import WeatherHeader from '../../components/WeatherHeader';
import TodayForecast from '../../components/TodayForecast';
import FutureForecast from '../../components/FutureForecast';
import getWeather from '../../redux/forecast/forecastOperations';
import { getCurrentWeather } from '../../redux/forecast/forecastSelectors';
import { MainState, CityWeather } from '../../redux/forecast/forecastTypes';

interface MatchParams {
  id: string;
}

const getCategoryFromLocation = (location: RouteComponentProps['location']): string | string[] =>
  queryString.parse(location.search).city;

interface WeatherPageStateProps {
  todayForecast: CityWeather[];
}

const mapStateToProps = (store: MainState): WeatherPageStateProps => ({
  todayForecast: getCurrentWeather(store),
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

    history.push(routes.HOME_PAGE.path);
  };

  render(): JSX.Element {
    const { match, todayForecast } = this.props;

    return (
      <section>
        {todayForecast.length > 0 ? (
          <WeatherHeader />
        ) : (
          <h1>We don&apos;t have a weather forecast for that city.</h1>
        )}

        <button type="button" onClick={this.handleOnClick}>
          Back to search
        </button>
        <Route path={`${match.path}/today`} component={TodayForecast} />
        <Route path={`${match.path}/future`} component={FutureForecast} />
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
