import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../pages/CalculatorPage';

describe('Testing pages that should render correctly', () => {
  it('Calculator page should render correctly', () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
