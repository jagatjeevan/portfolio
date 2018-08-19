import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from '../scss/style.scss';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <span>W</span>ork
        <span>I</span>n
        <span>P</span>rogress
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
