import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Persons from '../pages/Persons';

const Content = () => (
  <div className="container mx-auto">
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/persons" component={Persons} />
    </Switch>
  </div>
);

export default Content;
