import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';
import CalculatorPage from '../pages/CalculatorPage';

describe('Testing pages that should render correctly', () => {
  it('Quote should render correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Calculator page should render correctly', () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
