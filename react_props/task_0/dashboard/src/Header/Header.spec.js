import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('Render without crashing', () => {
    render(<Header />);
  });
});
