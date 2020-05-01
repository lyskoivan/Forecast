import axios from 'axios';

const APIkey = 'd123024470f09ca0e7431a75e6756167';

const getWeatherForecast = (city: string): Promise<any> =>
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIkey}`);

export default getWeatherForecast;
