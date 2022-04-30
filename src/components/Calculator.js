import React, { useState } from 'react';
import './Calculator.css';
import CalcButton from './CalcButton';
import Display from './Display';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleButtonPress = (e) => {
    console.log(calculatorObj);
    const modObj = calculate(calculatorObj, e.target.textContent);
    console.log(modObj);
    setCalculatorObj((prevState) => ({
      ...prevState,
      ...modObj,
    }));

    console.log(calculatorObj);
  };

  return (
    <div className="calculator parent">
      <Display calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="AC" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="+/-" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="%" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="&divide;" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="7" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="8" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="9" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="x" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="4" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="5" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="6" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="-" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="1" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="2" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="3" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="+" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="." handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="=" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="0" handleButtonPress={handleButtonPress} calculatorObject={calculatorObj} />
    </div>
  );
}
