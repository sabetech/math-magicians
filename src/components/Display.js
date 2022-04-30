import { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
class Display extends Component {
  /* eslint-disable */
  constructor(props) {
    super(props);
  }

  render() {
      const {total, operation, next} = this.props.calculatorObject;
    return (
      <p className="display">{total} {operation} {next}</p>
    );
  }
}

Display.propTypes = {
    calculatorObject: PropTypes.object.isRequired
  };

export default Display;


    
