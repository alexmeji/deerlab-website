import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/Home';
import CoursesPage from './pages/Courses';

import TopMenu from './components/TopMenu';
import NotFound from './components/NotFound';

const App = () => (
  <>
    <TopMenu />
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
