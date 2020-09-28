import React from 'react';
import { render, screen, waitForElementToBeRemoved } from './custom-render';
import App from './App';

// !Different style of testing
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Getting started with React testing library/i);
//   expect(linkElement).toBeInTheDocument();
// });

// !use describe, it pattern
describe("<App />", () => {
  it("Renders <App /> component correctly", async () => {
    render(<App />);
    expect(
      screen.getByText(/Getting started with React testing library/i)
    ).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText(/Fetching todos/i));
  });
});
