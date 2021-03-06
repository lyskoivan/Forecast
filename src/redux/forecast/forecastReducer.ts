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

const SearchHistoryReducer = (state: string[] = [], action: types.SearchHistoryTypes): string[] => {
  switch (action.type) {
    case types.SEARCH_HISTORY:
      return [...state, action.payload.history];

    case types.DELETE_FIRST_SEARCH_HISTORY:
      return state.filter((city): boolean => city !== action.payload.city);

    default:
      return state;
  }
};

export type AsyncTypes = types.CityWeatherTypes | types.WeekWeatherTypes;

const errorReducer = (state: types.Error | null = null, action: AsyncTypes): types.Error | null => {
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

const isLoadingReducer = (state = false, action: AsyncTypes): boolean => {
  switch (action.type) {
    case types.CURRENT_WEATHER_START:
    case types.WEEK_WEATHER_START:
      return true;

    case types.CURRENT_WEATHER_ERROR:
    case types.WEEK_WEATHER_ERROR:
    case types.CURRENT_WEATHER_SUCCESS:
    case types.WEEK_WEATHER_SUCCESS:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  currentWeather: currentWeatherReducer,
  weekWeather: weekWeatherReducer,
  searchQuery: SearchQueryReducer,
  searchHistory: SearchHistoryReducer,
  error: errorReducer,
  isLoading: isLoadingReducer,
});
