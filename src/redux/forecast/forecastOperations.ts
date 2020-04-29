import * as actions from './forecastActions';
import { getWeatherForecast } from '../../services/weatherAPI';

import { Dispatch } from '../store';
import { Error, CityWeather } from './forecastTypes';

interface AxiosDataType {
  list: CityWeather[];
}

interface AxiosType {
  data: AxiosDataType;
  status: number;
  statusText: string;
}

const getWeather = (query: string) => (dispatch: Dispatch): void => {
  dispatch(actions.currentWeatherStart());
  dispatch(actions.weekWeatherStart());

  getWeatherForecast(query)
    .then((res: AxiosType) => {
      dispatch(actions.currentWeatherSuccess(res.data.list));
      dispatch(actions.weekWeatherSuccess(res.data.list));
    })
    .catch((err: Error) => {
      dispatch(actions.currentWeatherError(err));
      dispatch(actions.weekWeatherError(err));
    });
};

export default getWeather;
