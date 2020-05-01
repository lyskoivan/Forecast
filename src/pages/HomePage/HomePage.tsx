import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './HomePage.scss';

import WeatherSearcher from '../../components/WeatherSearcher';
import SearchHistory from '../../components/SearchHistory';

interface MatchParams {
  id: string;
}

class HomePage extends Component<RouteComponentProps<MatchParams>> {
  handleSearchQueryGet = (query: string): void => {
    const { history } = this.props;

    if (query) {
      history.push({
        pathname: '/weather/today',
        search: `city=${query}`,
      });
    }
  };

  render(): JSX.Element {
    return (
      <section className="home-wrapper">
        <h1 className="home-title">Find out the weather of your city</h1>
        <WeatherSearcher onSearchGet={this.handleSearchQueryGet} />
        <SearchHistory />
      </section>
    );
  }
}

export default HomePage;
