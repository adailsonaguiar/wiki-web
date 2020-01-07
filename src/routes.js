import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import login from './pages/login/Login';
import cadastro from './pages/cadastro/Cadastro';
import home from './pages/home/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={login} />
        <Route path='/cadastro' component={cadastro} />
        <Route path='/home' component={home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
