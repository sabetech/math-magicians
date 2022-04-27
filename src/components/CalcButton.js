import PropTypes from 'prop-types';

export default function CalcButton({ buttonCharacter }) {
  let extraClass = buttonCharacter === '0' ? 'zeroButton' : '';
  console.log(buttonCharacter);
  if (buttonCharacter === '+'
  || buttonCharacter === '-'
  || buttonCharacter === '÷'
  || buttonCharacter === '×'
  || buttonCharacter === '=') {
    extraClass += ' operatorButton';
  }

  return (
    <button type="button" className={`calcButton ${extraClass}`}>{buttonCharacter}</button>
  );
}

CalcButton.propTypes = {
  buttonCharacter: PropTypes.string.isRequired,
};
