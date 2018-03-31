import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from './LogIn'

import EmployerLanding from './EmployerLanding';
import Landing from './Landing';
import Role from './Role';
import SignUp from './SignUp';

export default function App() {

  return (
  <Switch>
   <Route exact path="/" component={LogIn} />
   <Route exact path="/landing" component={Landing} />
    <Route exact path="/employerLanding" component={EmployerLanding} />
    <Route exact path="/role/:id" component={Role} />
    <Route exact path="/result/:id" component={Role} />
  </Switch>
  );
}
