import dateUntils from './getDate';
import { CityWeather } from '../redux/forecast/forecastTypes';

const currentForecastFilter = (timeWeather: CityWeather): boolean => {
  const startDay = dateUntils.getStartDay() <= Date.parse(timeWeather.dt_txt);
  const endDay = dateUntils.getStartDay(1) > Date.parse(timeWeather.dt_txt);
  return startDay && endDay;
};

export default currentForecastFilter;
