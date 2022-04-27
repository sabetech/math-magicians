import './Calculator.css';
import CalcButton from './CalcButton';
import Display from './Display';

export default function Calculator() {
  return (
    <div className="calculator parent">
      <Display />
      <CalcButton buttonCharacter="AC" />
      <CalcButton buttonCharacter="+/-" />
      <CalcButton buttonCharacter="%" />
      <CalcButton buttonCharacter="&divide;" />
      <CalcButton buttonCharacter="9" />
      <CalcButton buttonCharacter="8" />
      <CalcButton buttonCharacter="7" />
      <CalcButton buttonCharacter="&times;" />
      <CalcButton buttonCharacter="6" />
      <CalcButton buttonCharacter="5" />
      <CalcButton buttonCharacter="4" />
      <CalcButton buttonCharacter="-" />
      <CalcButton buttonCharacter="3" />
      <CalcButton buttonCharacter="2" />
      <CalcButton buttonCharacter="1" />
      <CalcButton buttonCharacter="+" />
      <CalcButton buttonCharacter="." />
      <CalcButton buttonCharacter="=" />
      <CalcButton buttonCharacter="0" />
    </div>
  );
}
