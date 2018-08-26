import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeLanguage } from '../actions/changeLanguage';

function mapStateToProps(state) {
  console.log(state);
  return {
    language: state.language.language,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeLanguageTo: bindActionCreators(changeLanguage, dispatch),
  };
}

export class Header extends Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(lang) {
    this.props.changeLanguageTo(lang);
  }
  render() {
    console.log('coming');
    return (
      <div>
        <Link to="/about">About</Link>
        <Link to="/">Work in progress</Link>
        <span className="pointer" onClick={e => this.changeLanguage('en')}>en</span>
        <span className="pointer" onClick={e => this.changeLanguage('fr')}>fr</span>
        <span>The language selected is: {this.props.language}</span>
      </div>
    );
  }
}

Header.propTypes = {
  changeLanguageTo: PropTypes.func,
  language: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
