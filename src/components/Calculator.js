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
    setCalculatorObj((prev) => ({ ...prev, ...calculate(prev, e.target.textContent) }));
  };

  return (
    <div className="calculator parent">
      <Display calculatorObject={calculatorObj} />
      <CalcButton buttonCharacter="AC" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="+/-" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="%" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="&divide;" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="7" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="8" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="9" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="x" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="4" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="5" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="6" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="-" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="1" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="2" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="3" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="+" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="." handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="=" handleButtonPress={handleButtonPress} />
      <CalcButton buttonCharacter="0" handleButtonPress={handleButtonPress} />
    </div>
  );
}
