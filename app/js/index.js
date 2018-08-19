import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import style from '../scss/style.scss';

import App from './component/App';

const Index = () => (<Router><App /></Router>);

ReactDOM.render(<Index />, document.getElementById('app'));
