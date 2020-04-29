import { combineReducers } from 'redux';

import forecastReducer from './forecast/forecastReducer';

export default combineReducers({ forecast: forecastReducer });
