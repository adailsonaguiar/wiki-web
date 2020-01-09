import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import login from './pages/login-page/Login';
import register from './pages/register-page/Register';
import home from './pages/home-page/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={login} />
        <Route path='/register' component={register} />
        <Route path='/home' component={home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
