import * as types from './forecastTypes';

// Search Query

export const searchQuery = (query: string): types.SearchQueryTypes => ({
  type: types.SEARCH_QUERY,
  payload: { query },
});

// Search History

export const searchHistory = (history: string): types.SearchHistoryTypes => ({
  type: types.SEARCH_HISTORY,
  payload: { history },
});

export const deleteFirstSearchHistory = (city: string): types.SearchHistoryTypes => ({
  type: types.DELETE_FIRST_SEARCH_HISTORY,
  payload: { city },
});

// Current Weather

export const currentWeatherStart = (): types.CityWeatherTypes => ({
  type: types.CURRENT_WEATHER_START,
});

export const currentWeatherSuccess = (weather: types.CityWeather[]): types.CityWeatherTypes => ({
  type: types.CURRENT_WEATHER_SUCCESS,
  payload: { weather },
});

export const currentWeatherError = (error: types.Error): types.CityWeatherTypes => ({
  type: types.CURRENT_WEATHER_ERROR,
  payload: { error },
});

// Week Weather

export const weekWeatherStart = (): types.WeekWeatherTypes => ({
  type: types.WEEK_WEATHER_START,
});

export const weekWeatherSuccess = (weather: types.CityWeather[]): types.WeekWeatherTypes => ({
  type: types.WEEK_WEATHER_SUCCESS,
  payload: { weather },
});

export const weekWeatherError = (error: types.Error): types.WeekWeatherTypes => ({
  type: types.WEEK_WEATHER_ERROR,
  payload: { error },
});
