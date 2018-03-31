import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EmployerLanding from './EmployerLanding';
import Role from './Role';

export default function App() {

  return (
  <Switch>
<<<<<<< HEAD
    <Route exact path="/employerLanding" component={EmployerLanding} />
    <Route exact path="/role/:id" component={Role} />
=======
    <Route exact path="/" component={Landing} />
    <Route exact path="/result/:id" component={Role} />
>>>>>>> 666e84c36bc006f49b8284415866ba0af1c33917
  </Switch>
  );
}
