import React from 'react';
import { Route, Switch } from 'react-router-dom';

import WorkInProgress from './WorkInProgress';
import About from './About';

const App = () => ([
  <Route path="/" component={WorkInProgress} exact key="index" />,
  <Route path="/about" component={About} exact key="about" />
]);

export default App;
