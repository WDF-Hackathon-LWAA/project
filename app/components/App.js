import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EmployerLanding from './EmployerLanding';
import Role from './Role';

export default function App() {

  return (
  <Switch>
    <Route exact path="/employerLanding" component={EmployerLanding} />
    <Route exact path="/role/:id" component={Role} />
  </Switch>
  );
}
