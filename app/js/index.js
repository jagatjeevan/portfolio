// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from './reduxStore';
import '../scss/style.scss';

import App from './component/App';

const store = configureStore();
const Index = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

function run() {
  /* eslint no-undef: 0 */
  // $FlowSuppress: app container will not be null
  ReactDOM.render(<Index />, document.getElementById('app'));
}

/* eslint no-undef: 0 */
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  /* eslint no-undef: 0 */
  document.addEventListener('DOMContentLoaded', run, false);
}
