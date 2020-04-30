import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';

import routes from '../../routes/routes';

const App = (): JSX.Element => (
  <div className="main-wrapper">
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

export default App;
