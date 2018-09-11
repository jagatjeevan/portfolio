// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import { configureStore } from './reduxStore';
import '../scss/style.scss';

import App from './component/App';
import i18n from './utils/i18next';

const store = configureStore();
const Index = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </I18nextProvider>
);

function run() {
  i18n.initiateTranslator(() => {
    /* eslint no-undef: 0 */
    // $FlowSuppress: app container will not be null
    ReactDOM.render(<Index />, document.getElementById('app'));
  });
}

/* eslint no-undef: 0 */
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  /* eslint no-undef: 0 */
  document.addEventListener('DOMContentLoaded', run, false);
}
