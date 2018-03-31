import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import EmployerLanding from './EmployerLanding';
import Role from './Role';
import SignUp from './SignUp';

export default function App() {

  return (
  <Switch>
    <Route exact path="/" component={SignUp} />
    <Route exact path="/result/:id" component={Role} />
  </Switch>
  );
}
