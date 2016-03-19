import React, { Component } from 'react';

import styles from './index.css';

export default class Footer extends Component { // eslint-disable-line
  render() {
    return (
      <footer className={ styles.footer }>
          { "© Hyperion Industries Inc." }
      </footer>
    );
  }
}
