import { connect } from 'react-redux';
import React, { Component, SyntheticEvent, ChangeEvent } from 'react';

import './WeatherSearcher.scss';

import { Dispatch } from '../../redux/store';
import { searchQuery } from '../../redux/forecast/forecastActions';
import { SearchQueryTypes } from '../../redux/forecast/forecastTypes';

interface SearchProps {
  onSearch: Function;
}

const mapDispatchToProps = (dispatch: Dispatch): SearchProps => ({
  onSearch: (query: string): SearchQueryTypes => dispatch(searchQuery(query)),
});

interface WeatherSearcherMainProps {
  onSearchGet: Function;
}

type WeatherSearcherProps = ReturnType<typeof mapDispatchToProps> & WeatherSearcherMainProps;

interface WeatherSearcherState {
  query: string;
}

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

    if (!query) {
      alert('Type some city');

      return;
    }

    const { onSearch, onSearchGet } = this.props;

    onSearch(query.toLowerCase());
    onSearchGet(query.toLowerCase());
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

export default connect(null, mapDispatchToProps)(WeatherSearcher);
