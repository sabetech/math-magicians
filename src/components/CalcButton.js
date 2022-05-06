import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class CalcButton extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable */
    this.buttonCharacter = this.props.buttonCharacter;
    this.handleButtonClick = this.props.handleButtonPress;
    this.extraClass = this.buttonCharacter === '0' ? 'zeroButton' : '';

    if (this.buttonCharacter === '+'
    || this.buttonCharacter === '-'
    || this.buttonCharacter === '÷'
    || this.buttonCharacter === 'x'
    || this.buttonCharacter === '=') {
      this.extraClass += ' operatorButton';
    }
  }

  render() {
    return (
      <button type="button" className={`calcButton ${this.extraClass}`} onClick={this.handleButtonClick}>{this.buttonCharacter}</button>
    );
  }
}

CalcButton.propTypes = {
  buttonCharacter: PropTypes.string.isRequired,
};

export default CalcButton;
