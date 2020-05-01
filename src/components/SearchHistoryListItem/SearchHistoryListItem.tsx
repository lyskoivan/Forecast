import React, { MouseEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './SearchHistoryListItem.scss';

interface MainProps {
  city: string;
}

interface MatchParams {
  id: string;
}

type HistoryItem = RouteComponentProps<MatchParams> & MainProps;

const SearchHistoryListItem = ({ city, history }: HistoryItem): JSX.Element => {
  const handleSearchQueryGet = (query: string): void => {
    if (query) {
      history.push({
        pathname: '/weather/today',
        search: `city=${query}`,
      });
    }
  };

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    handleSearchQueryGet(city);
  };

  return (
    <li className="SearchHistoryListItem">
      <button type="button" onClick={handleOnClick} className="SearchHistoryListItem-button">
        {city}
      </button>
    </li>
  );
};
export default withRouter(SearchHistoryListItem);
