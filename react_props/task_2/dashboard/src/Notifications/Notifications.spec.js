import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('Render without crashing', () => {
    render(<Notifications />);
  });

  test('Render three notification items', () => {
    const notificationsList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    
    const { container } = render(<Notifications notifications={notificationsList} />);
    const listItems = container.querySelectorAll('li');
    
    expect(listItems).toHaveLength(3);
  });

  test('Render the text "Here is the list of notifications"', () => {
    render(<Notifications />);
    const text = screen.getByText(/here is the list of notifications/i);
    expect(text).toBeInTheDocument();
  });

  test('first notification item has correct text', () => {
    const notificationsList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    
    render(<Notifications notifications={notificationsList} />);
    const text = screen.getByText('New course available');
    expect(text).toBeInTheDocument();
  });
});
