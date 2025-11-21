import { render } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('Render without crashing', () => {
    render(<Login />);
  });
});
