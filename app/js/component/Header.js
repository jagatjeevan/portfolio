// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeLanguage } from '../actions/changeLanguage';
import translator from '../utils/i18next';

type Props = {
  language: string,
  changeLanguageTo: Function,
};

function mapStateToProps(state) {
  return {
    language: state.language.language,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeLanguageTo: bindActionCreators(changeLanguage, dispatch),
  };
}

export class Header extends Component<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(lang: string) {
    const { changeLanguageTo } = this.props;
    changeLanguageTo(lang);
    /* eslint no-unused-vars: 0 */
    Cookie.set('i18next', lang);
  }

  render() {
    const { language } = this.props;
    return (
      <div>
        <Link to="/about">{translator.translate('links.about')}</Link>
        <Link to="/">{translator.translate('links.home')}</Link>
        <span className="pointer" onClick={() => this.changeLanguage('en')} onKeyUp={() => this.changeLanguage('en')}>en</span>
        <span className="pointer" onClick={() => this.changeLanguage('fr')} onKeyUp={() => this.changeLanguage('fr')}>fr</span>
        <span>
          {translator.translate('selectedLanguage')}
          :
          {language}
        </span>
      </div>
    );
  }
}

Header.propTypes = {
  changeLanguageTo: PropTypes.func,
  language: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
