import React from 'react';
import { connect } from 'react-redux';

import './SearchHistory.scss';

import SearchHistoryList from '../SearchHistoryList';
import { MainState } from '../../redux/forecast/forecastTypes';
import { getSearchHistory } from '../../redux/forecast/forecastSelectors';

interface StateProps {
  searchHistory: string[];
}

const mapStateToProps = (store: MainState): StateProps => ({
  searchHistory: getSearchHistory(store),
});

const SearchHistory = ({ searchHistory }: StateProps): JSX.Element => (
  <section className="SearchHistory">
    {searchHistory.length > 0 && <SearchHistoryList searchHistory={searchHistory} />}
  </section>
);

export default connect(mapStateToProps, null)(SearchHistory);
