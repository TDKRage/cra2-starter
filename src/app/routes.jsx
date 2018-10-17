import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from 'pages/home';
import SignIn from 'pages/sign-in';

export const urls = {
  home: () => '/',
  signIn: () => '/sign-in',
};

const Routes = () => (
  <Fragment>
    <Route exact path={urls.home()} component={Home} />
    <Route exact path={urls.signIn()} component={SignIn} />
  </Fragment>
);

export default Routes;
