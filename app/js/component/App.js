import React from 'react';
import { Route, Switch } from 'react-router-dom';

import WorkInProgress from './WorkInProgress';
import About from './About';

const App = () => (
  <div>
    <Route path="/" component={WorkInProgress} exact />
    <Route path="/about" component={About} exact />
  </div>
);

export default App;
