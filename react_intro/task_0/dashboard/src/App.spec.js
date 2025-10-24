import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the h1 element with text "School dashboard"', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /School dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders correct text in body and footer paragraphs', () => {
    render(<App />);
    const bodyText = screen.getByText(/Login to access the full dashboard/i);
    const footerText = screen.getByText(/Copyright .* - holberton School/i);

    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test('renders the Holberton logo image', () => {
    render(<App />);
    const logoImg = screen.getByAltText(/holberton logo/i);
    expect(logoImg).toBeInTheDocument();
  });
});
