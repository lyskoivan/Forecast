import { connect } from 'react-redux';
import React from 'react';

import getWeather from '../../redux/forecast/forecastOperations';

import './App.scss';

interface AppStateProps {
  setWeather: Function;
}

const App: React.FC<AppStateProps> = ({ setWeather }: AppStateProps): JSX.Element => {
  setWeather('London');
  return (
    <div className="main">
      <h1>Start </h1>
    </div>
  );
};

const mapDispatchToProps = {
  setWeather: getWeather,
};

export default connect(null, mapDispatchToProps)(App);
