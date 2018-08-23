import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <Link to="/about">About</Link>
    <Link to="/">Work in progress</Link>
    <div className="container">
      You are in about page
    </div>
  </div>
);

export default About;
