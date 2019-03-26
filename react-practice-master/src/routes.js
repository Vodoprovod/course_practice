import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './app';

// import { HomePage, HomeRoutes } from './pages/home/index';


export default (
    <Switch>
        <Route component={ App } path={ App.path } />
    </Switch>
);

// <Redirect from='*' to={ App.path } />
