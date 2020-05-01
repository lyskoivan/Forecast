export const SEARCH_QUERY = 'SEARCH_QUERY';

export const CURRENT_WEATHER_START = 'CURRENT_WEATHER_START';
export const CURRENT_WEATHER_SUCCESS = 'CURRENT_WEATHER_SUCCESS';
export const CURRENT_WEATHER_ERROR = 'CURRENT_WEATHER_ERROR';

export const WEEK_WEATHER_START = 'WEEK_WEATHER_START';
export const WEEK_WEATHER_SUCCESS = 'WEEK_WEATHER_SUCCESS';
export const WEEK_WEATHER_ERROR = 'WEEK_WEATHER_ERROR';

export interface Error {
  message: string | null;
  name: string | null;
  stack: string | null;
  config: object | null;
}

interface Forecast {
  temp: number;
  feels_like: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
}

interface Weather {
  icon: string;
  main: string;
}

export interface CityWeather {
  dt: number;
  main: Forecast;
  weather: Weather[];
  dt_txt: string;
}

export interface ForecastState {
  currentWeather: CityWeather[];
  weekWeather: CityWeather[];
  searchQuery: string;
  error: Error | null;
}

export interface MainState {
  forecast: ForecastState;
}

// Search Query

interface SearchQueryeAction {
  type: typeof SEARCH_QUERY;
  payload: { query: string };
}

export type SearchQueryTypes = SearchQueryeAction;

// Current Weather

interface CurrentWeatherStartAction {
  type: typeof CURRENT_WEATHER_START;
}

interface CurrentWeatherSuccessAction {
  type: typeof CURRENT_WEATHER_SUCCESS;
  payload: { weather: Array<CityWeather> };
}

interface CurrentWeatherErrorAction {
  type: typeof CURRENT_WEATHER_ERROR;
  payload: { error: Error };
}

export type CityWeatherTypes =
  | CurrentWeatherStartAction
  | CurrentWeatherSuccessAction
  | CurrentWeatherErrorAction;

// Week Weather

interface WeekWeatherStartAction {
  type: typeof WEEK_WEATHER_START;
}

interface WeekWeatherSuccessAction {
  type: typeof WEEK_WEATHER_SUCCESS;
  payload: { weather: Array<CityWeather> };
}

interface WeekWeatherErrorAction {
  type: typeof WEEK_WEATHER_ERROR;
  payload: { error: Error };
}

export type WeekWeatherTypes = WeekWeatherStartAction | WeekWeatherSuccessAction | WeekWeatherErrorAction;
