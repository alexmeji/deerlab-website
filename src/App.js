import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import TopMenu from './components/TopMenu';

// import Main from './pages/Main';
// import Courses from './pages/Courses';

const App = () => (
  <main>
    <TopMenu />
    {/* <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/main" component={Main} />
      <Route path="/courses" component={Courses} />
    </Switch> */}
  </main>
);

export default App;
