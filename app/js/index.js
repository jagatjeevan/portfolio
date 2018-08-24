import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from './reduxStore';
import style from '../scss/style.scss';

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
  ReactDOM.render(<Index />, document.getElementById('app'));
}

if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
