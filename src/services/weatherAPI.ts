import axios from 'axios';

import { Error } from '../redux/forecast/forecastTypes';

const APIkey = 'd123024470f09ca0e7431a75e6756167';

export const getWeatherForecast = (city: string): Promise<any> =>
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIkey}`);

export const getWeatherIconsasync = (icon: string): void => {
  axios.get(`https://openweathermap.org/img/wn/${icon}@2x.png`).catch((err: Error): void => {
    throw new Error(err.message);
  });
};
