import * as actions from './forecastActions';
import getWeatherForecast from '../../services/weatherAPI';

import { Dispatch } from '../store';
import currentForecastFilter from '../../utils/helpers';
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
      const { list } = res.data;

      const currentForecast = list.filter((listItem): boolean => currentForecastFilter(listItem));

      dispatch(actions.currentWeatherSuccess(currentForecast));
      dispatch(actions.weekWeatherSuccess(list));
    })
    .catch((err: Error) => {
      dispatch(actions.currentWeatherError(err));
      dispatch(actions.weekWeatherError(err));
    });
};

export default getWeather;
