import './Calculator.css';
import { Component } from 'react';
import CalcButton from './CalcButton';
import Display from './Display';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable */
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  /* eslint-disable */
  handleButtonPress(e) {
    this.setState((state)=> calculate(state, e.target.textContent));
  }

  render() {
    return (
      <div className="calculator parent">
        <Display calculatorObject={this.state} />
        <CalcButton buttonCharacter="AC" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="+/-" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="%" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="&divide;" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="7" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="8" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="9" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="x" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="4" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="5" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="6" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="-" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="1" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="2" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="3" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="+" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="." handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="=" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
        <CalcButton buttonCharacter="0" handleButtonPress={this.handleButtonPress} calculatorObject={this.state} />
      </div>
    );
  }
}

export default Calculator;
