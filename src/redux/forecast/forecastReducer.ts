import { combineReducers } from 'redux';

import * as types from './forecastTypes';

const currentWeatherReducer = (
  state: types.CityWeather[] = [],
  action: types.CityWeatherTypes,
): types.CityWeather[] => {
  switch (action.type) {
    case types.CURRENT_WEATHER_SUCCESS:
      return action.payload.weather;

    default:
      return state;
  }
};

const weekWeatherReducer = (
  state: types.CityWeather[] = [],
  action: types.WeekWeatherTypes,
): types.CityWeather[] => {
  switch (action.type) {
    case types.WEEK_WEATHER_SUCCESS:
      return action.payload.weather;

    default:
      return state;
  }
};

const SearchQueryReducer = (state = '', action: types.SearchQueryTypes): string => {
  switch (action.type) {
    case types.SEARCH_QUERY:
      return action.payload.query;

    default:
      return state;
  }
};

export type ErrorTypes = types.CityWeatherTypes | types.WeekWeatherTypes;

const errorReducer = (state: types.Error | null = null, action: ErrorTypes): types.Error | null => {
  switch (action.type) {
    case types.CURRENT_WEATHER_START:
    case types.WEEK_WEATHER_START:
      return null;

    case types.CURRENT_WEATHER_ERROR:
    case types.WEEK_WEATHER_ERROR:
      return action.payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  currentWeather: currentWeatherReducer,
  weekWeather: weekWeatherReducer,
  searchQuery: SearchQueryReducer,
  error: errorReducer,
});
