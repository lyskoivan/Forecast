import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import WeatherSearcher from '../../components/WeatherSearcher';

interface MatchParams {
  id: string;
}

class HomePage extends Component<RouteComponentProps<MatchParams>> {
  handleSearchQueryGet = (query: string): void => {
    const { history } = this.props;

    if (query) {
      history.push({
        pathname: '/weather',
        search: `city=${query}`,
      });
    }
  };

  render(): JSX.Element {
    return (
      <section>
        <h1>Find out the weather of your city</h1>
        <WeatherSearcher onSearchGet={this.handleSearchQueryGet} />
      </section>
    );
  }
}

export default HomePage;
