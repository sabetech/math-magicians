import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

describe('Testing pages that should render correctly', () => {
  it('Quote should render correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
