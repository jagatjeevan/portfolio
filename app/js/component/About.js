// @flow

import React from 'react';

import Header from './Header';
import translator from '../utils/i18next';

const About = () => (
  <div>
    <Header />
    <div className="container">
      { translator.translate('about.mainContent') }
    </div>
  </div>
);

export default About;
