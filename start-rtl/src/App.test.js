import React from 'react';
import { render, screen } from './custom-render';
import App from './App';

// !Different style of testing
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Getting started with React testing library/i);
//   expect(linkElement).toBeInTheDocument();
// });

// !use describe, it pattern
describe('<App />', () => {
  it('Renders <App /> component correctly', () => {
    render(<App />);
    expect(
      screen.getByText(/Getting started with React testing library/i)
    ).toBeInTheDocument();
  });
});
