export const SEARCH_QUERY = 'SEARCH_QUERY';

export const CITY_WEATHER_START = 'CITY_WEATHER_START';
export const CITY_WEATHER_SUCCESS = 'CITY_WEATHER_SUCCESS';
export const CITY_WEATHER_ERROR = 'CITY_WEATHER_ERROR';

export interface Error {
  message: string | null;
  name: string | null;
  stack: string | null;
  config: object | null;
}

// City Weather

interface CityWeatherStartAction {
  type: typeof CITY_WEATHER_START;
}

interface CityWeatherSuccessAction {
  type: typeof CITY_WEATHER_SUCCESS;
  payload: { weather: 'something**' };
}

interface CityWeatherErrorAction {
  type: typeof CITY_WEATHER_ERROR;
  payload: { error: Error };
}

export type CityWeatherTypes = CityWeatherStartAction | CityWeatherSuccessAction | CityWeatherErrorAction;

// Search Query

interface SearchQueryeAction {
  type: typeof SEARCH_QUERY;
  payload: { query: string };
}

export type SearchQueryTypes = SearchQueryeAction;
