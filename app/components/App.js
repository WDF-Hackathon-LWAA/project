import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import EmpolyerLanding from './EmployerLanding';
import Role from './Role';

export default function App() {

  return (
  <Switch>
    <Route exact path="/" component={EmpolyerLanding} />
    <Route exact path="/result/:id" component={Role} />
  </Switch>
    // <Landing />
  );
}
