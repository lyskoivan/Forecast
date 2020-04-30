import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage' /* webpackChunkName: "home-page" */));

const WeatherPage = lazy(() => import('../pages/WeatherPage' /* webpackChunkName: "weather-page" */));

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },

  WEATHER_PAGE: {
    path: '/weather',
    component: WeatherPage,
  },
};
