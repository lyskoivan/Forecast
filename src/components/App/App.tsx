import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import routes from '../../routes/routes';
import getWeather from '../../redux/forecast/forecastOperations';

import './App.scss';

interface AppStateProps {
  setWeather: Function;
}

const App: React.FC<AppStateProps> = ({ setWeather }: AppStateProps): JSX.Element => (
  <div>
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path={routes.HOME_PAGE.path} exact component={routes.HOME_PAGE.component} />
          <Route path={routes.WEATHER_PAGE.path} component={routes.WEATHER_PAGE.component} />
          <Redirect to={routes.HOME_PAGE.path} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </div>
);

const mapDispatchToProps = {
  setWeather: getWeather,
};

export default connect(null, mapDispatchToProps)(App);
