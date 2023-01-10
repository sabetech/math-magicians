import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CalcButton from '../components/CalcButton';

it('CalcButton should render correctly', () => {
  const calcButton = render(
    <Router>
      <CalcButton />
    </Router>,
  );
  expect(calcButton).toMatchSnapshot();
});
