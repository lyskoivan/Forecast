import { MainState, CityWeather, Error } from './forecastTypes';

export const getCurrentWeather = (store: MainState): CityWeather[] => store.forecast.currentWeather;
export const getWeekWeather = (store: MainState): CityWeather[] => store.forecast.weekWeather;
export const getSearchHistory = (store: MainState): string[] => store.forecast.searchHistory;
export const getSearchQuery = (store: MainState): string => store.forecast.searchQuery;
export const getIsLoading = (store: MainState): boolean => store.forecast.isLoading;
export const getError = (store: MainState): Error => store.forecast.error;
