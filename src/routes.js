import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { onAuth } from './config/auth';

import login from './pages/login-page/Login';
import register from './pages/register-page/Register';
import home from './pages/home-page/Home';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      onAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={home} />
        {/* <Route exact path='/' component={home} /> */}
        <Route path='/register' component={register} />
        <Route path='/login' component={login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
