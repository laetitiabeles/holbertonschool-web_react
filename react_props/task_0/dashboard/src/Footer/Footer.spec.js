import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('Render without crashing', () => {
    render(<Footer />);
  });
});
