import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

describe('Calculator pages that should render correctly', () => {
  it('Home page should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
