import PropTypes from 'prop-types';
import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class CalcButton extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable */
    this.buttonCharacter = this.props.buttonCharacter;
    this.extraClass = this.buttonCharacter === '0' ? 'zeroButton' : '';

    if (this.buttonCharacter === '+'
    || this.buttonCharacter === '-'
    || this.buttonCharacter === '÷'
    || this.buttonCharacter === '×'
    || this.buttonCharacter === '=') {
      this.extraClass += ' operatorButton';
    }
  }

  render() {
    return (
      <button type="button" className={`calcButton ${this.extraClass}`}>{this.buttonCharacter}</button>
    );
  }
}

CalcButton.propTypes = {
  buttonCharacter: PropTypes.string.isRequired,
};

export default CalcButton;
