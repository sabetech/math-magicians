import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Display from '../components/Display';

it('Display should render correctly', () => {
  const calculatorObject = {
    total: 0,
    next: null,
    operation: null,
  };

  const display = render(
    <Router>
      <Display calculatorObject={calculatorObject} />
    </Router>,
  );
  expect(display).toMatchSnapshot();
});
