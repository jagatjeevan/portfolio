// @flow

import React from 'react';
import { Route } from 'react-router-dom';

import WorkInProgress from './WorkInProgress';
import About from './About';
import Resume from './Resume';

const App = () => ([
  <Route path="/" component={Resume} exact key="resume" />,
  <Route path="/work-in-progress" component={WorkInProgress} exact key="index" />,
  <Route path="/about" component={About} exact key="about" />,
]);

export default App;
