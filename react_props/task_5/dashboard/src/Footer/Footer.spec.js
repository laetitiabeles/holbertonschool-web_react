import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('Render without crashing', () => {
    render(<Footer />);
  });

  test('Render the text "Copyright"', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    const footerText = screen.getByText(new RegExp(`Copyright ${currentYear} - Holberton School`, 'i'));
    expect(footerText).toBeInTheDocument();
  });
});
