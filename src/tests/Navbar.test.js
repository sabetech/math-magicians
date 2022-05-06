import React from 'react';
// import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/NavBar';

describe('Testing pages that should render correctly', () => {
  it('Navbar should render correctly', () => {
    const navBar = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(navBar).toMatchSnapshot();
  });
});
