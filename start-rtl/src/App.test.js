import React from 'react';
import { render } from '@testing-library/react';
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
    const { getByText } = render(<App />);
    expect(
      getByText(/Getting started with React testing library/i)
    ).toBeInTheDocument();
  });
});
