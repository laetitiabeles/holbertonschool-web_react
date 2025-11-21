import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('Render without crashing', () => {
    render(<App />);
  });
});
