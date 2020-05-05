import { startOfToday, startOfTomorrow } from 'date-fns';

import { CityWeather } from '../redux/forecast/forecastTypes';

const currentForecastFilter = (timeWeather: CityWeather): boolean => {
  const startDay = Date.parse(startOfToday().toString()) <= Date.parse(timeWeather.dt_txt);
  const endDay = Date.parse(startOfTomorrow().toString()) > Date.parse(timeWeather.dt_txt);
  return startDay && endDay;
};

export default currentForecastFilter;
