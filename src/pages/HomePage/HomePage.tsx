import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './HomePage.scss';

import SearchHistory from '../../components/SearchHistory';
import WeatherSearcher from '../../components/WeatherSearcher';

interface MatchParams {
  id: string;
}

const HomePage = ({ history }: RouteComponentProps<MatchParams>): JSX.Element => {
  const handleSearchQueryGet = (query: string): void => {
    if (query) {
      history.push({
        pathname: '/weather/today',
        search: `city=${query}`,
      });
    }
  };

  return (
    <section className="home-wrapper">
      <h1 className="home-title">Find out the weather of your city</h1>
      <WeatherSearcher onSearchGet={handleSearchQueryGet} />
      <SearchHistory />
    </section>
  );
};

export default HomePage;
