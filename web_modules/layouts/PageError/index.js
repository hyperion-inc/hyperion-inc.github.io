import React, { Component } from 'react';
import { PropTypes } from 'react';

import Header from '../../Header';
import Footer from '../../Footer';

export default class PageError extends Component { // eslint-disable-line

  static propTypes = {
    error: PropTypes.number.isRequired,
    errorText: PropTypes.string.isRequired,
  };

  render() {
    const {
      error,
      errorText,
    } = this.props;

    return (
      <div>
        <Header />
        <h1>{ error }</h1>
        <p>{ errorText }</p>
        <Footer />
      </div>
    );
  }
}
