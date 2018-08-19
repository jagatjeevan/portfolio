import React from 'react';
import { Link } from 'react-router-dom';

const WorkInProgress = () => (
  <div>
    <Link to="/about">About</Link>
    <Link to="/">Work in progress</Link>
    <div className="container">
      <span>W</span>ork
      <span>I</span>n
      <span>P</span>rogress
    </div>
  </div>
);

export default WorkInProgress;
