import React, { Component } from 'react';
import { PropTypes } from 'react';
import Helmet from 'react-helmet';

// import Header from '../Header';
import GoogleAnalyticsTracker from '../GoogleAnalyticsTracker';

import styles from './index.css';

export default class Layout extends Component { // eslint-disable-line

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    params: PropTypes.object
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired
  };

  render() {
    const {
      pkg,
    } = this.context.metadata;

    return (
      <GoogleAnalyticsTracker params={ this.props.params }>
        <Helmet
          meta={ [
            { property: 'og:site_name', content: pkg.name },
            { name: 'twitter:site', content: `@${pkg.twitter}` },
          ] }
        />
        <div className={ styles.layout }>
          <div className={ styles.content }>
            { this.props.children }
          </div>
        </div>
      </GoogleAnalyticsTracker>
    );
  }
}
