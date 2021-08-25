import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Ask, NotFound } from '../pages/index';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ask" component={Ask} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
