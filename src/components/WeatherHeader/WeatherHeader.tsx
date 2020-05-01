import React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

import './WeatherHeader.scss';

interface MatchParams {
  id: string;
}

const WeatherHeader = ({ match, location }: RouteComponentProps<MatchParams>): JSX.Element => (
  <header className="WeatherHeader">
    <ul className="WeatherHeader-list">
      <li className="WeatherHeader-list-item">
        <NavLink
          className="WeatherHeader-list-link"
          activeClassName="WeatherHeader-list-link__active"
          to={{
            pathname: `${match.url}/today`,
            search: location.search,
          }}
        >
          Today
        </NavLink>
      </li>
      <li className="WeatherHeader-list-item">
        <NavLink
          className="WeatherHeader-list-link"
          activeClassName="WeatherHeader-list-link__active"
          to={{
            pathname: `${match.url}/future`,
            search: location.search,
          }}
        >
          Future
        </NavLink>
      </li>
    </ul>
  </header>
);

export default withRouter(WeatherHeader);
