import React from 'react';

import SearchHistoryListItem from '../SearchHistoryListItem';

interface MainProps {
  searchHistory: string[];
}

const SearchHistoryList = ({ searchHistory }: MainProps): JSX.Element => (
  <ul>
    {searchHistory.map(
      (city): JSX.Element => (
        <SearchHistoryListItem key={city} city={city} />
      ),
    )}
  </ul>
);

export default SearchHistoryList;
