import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Persons from '../pages/Persons';

const Content = () => (
  <>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/team" component={Persons} />
    </Switch>
  </>
);

export default Content;
