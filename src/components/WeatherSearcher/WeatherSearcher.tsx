import { connect } from 'react-redux';
import React, { Component, SyntheticEvent, ChangeEvent } from 'react';

import './WeatherSearcher.scss';

import { Dispatch } from '../../redux/store';
import { getSearchHistory } from '../../redux/forecast/forecastSelectors';
import { SearchQueryTypes, SearchHistoryTypes, MainState } from '../../redux/forecast/forecastTypes';
import { searchQuery, searchHistory, deleteFirstSearchHistory } from '../../redux/forecast/forecastActions';

interface SearchProps {
  onSearch: Function;
  setSearchHistory: Function;
  deleteSearchItem: Function;
}

interface SearchStateProps {
  searchHistoryGet: string[];
}

const mapStateToProps = (store: MainState): SearchStateProps => ({
  searchHistoryGet: getSearchHistory(store),
});

const mapDispatchToProps = (dispatch: Dispatch): SearchProps => ({
  onSearch: (query: string): SearchQueryTypes => dispatch(searchQuery(query)),
  setSearchHistory: (query: string): SearchHistoryTypes => dispatch(searchHistory(query)),
  deleteSearchItem: (city: string): SearchHistoryTypes => dispatch(deleteFirstSearchHistory(city)),
});

interface MainProps {
  onSearchGet: Function;
}

interface WeatherSearcherState {
  query: string;
}

type WeatherSearcherProps = ReturnType<typeof mapDispatchToProps> & MainProps & SearchStateProps;

class WeatherSearcher extends Component<WeatherSearcherProps, WeatherSearcherState> {
  state = {
    query: '',
  };

  handleChangeQuery = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ query: e.target.value });
  };

  handleSubmitSearchForm = (e: SyntheticEvent): void => {
    e.preventDefault();

    const { query } = this.state;
    const parseQuery = query.toLowerCase();

    if (!query) {
      alert('Type some city');

      return;
    }

    const { onSearch, onSearchGet, setSearchHistory, deleteSearchItem, searchHistoryGet } = this.props;

    if (!searchHistoryGet.includes(parseQuery)) {
      if (searchHistoryGet.length === 5) {
        deleteSearchItem(searchHistoryGet[0]);
      }
      setSearchHistory(parseQuery);
    }

    onSearch(parseQuery);
    onSearchGet(parseQuery);
  };

  render(): JSX.Element {
    const { query } = this.state;

    return (
      <section className="Searchbar">
        <form onSubmit={this.handleSubmitSearchForm} className="SearchForm">
          <input
            onChange={this.handleChangeQuery}
            className="SearchForm-input"
            value={query}
            type="text"
            placeholder="Search city..."
            autoComplete="off"
          />

          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSearcher);
