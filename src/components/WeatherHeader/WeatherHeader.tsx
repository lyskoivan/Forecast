import React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}

const WeatherHeader = ({ match, location }: RouteComponentProps<MatchParams>): JSX.Element => (
  <header>
    <ul>
      <li>
        <NavLink
          to={{
            pathname: `${match.url}/today`,
            search: location.search,
          }}
        >
          Today
        </NavLink>
      </li>
      <li>
        <NavLink
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
