import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './index.css';
import SVG from 'react-svg-inline';
import hyperionSVG from '../icons/hyperion-logo.svg';
import classNames from 'classnames';

export default class Header extends Component { // eslint-disable-line
  static propTypes = {
    isLight: PropTypes.boolean,
    isDark: PropTypes.boolean
  }

  render() {
    const menuColor = classNames({
      [styles.header]: true,
      [styles.light]: this.props.isLight,
      [styles.black]: this.props.isDark
    });
    return (
      <header className={ menuColor }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <a
              className={ styles.link }
              href="/"
            >
              <SVG svg={ hyperionSVG } />{ "Home" }
            </a>
          </div>
          <div className={ styles.navPart2 }>
            <Link
              className={ styles.link }
              to="/contact"
            >
              { "Contact" }
            </Link>
            <Link
              className={ styles.link }
              to="/solutions"
            >
              { "Solutions" }
            </Link>
            <Link
              className={ styles.link }
              to="/about"
            >
              { "About" }
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
