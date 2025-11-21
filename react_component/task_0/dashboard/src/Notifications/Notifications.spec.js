import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];

  test('Render without crashing', () => {
    render(<Notifications />);
  });

  test('Display "Your notifications" text in all cases', () => {
    render(<Notifications />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  describe('When displayDrawer is false', () => {
    test('Does not display the close button', () => {
      const { container } = render(<Notifications displayDrawer={false} notifications={notificationsList} />);
      const button = container.querySelector('button[aria-label="Close"]');
      expect(button).not.toBeInTheDocument();
    });

    test('Does not display "Here is the list of notifications"', () => {
      render(<Notifications displayDrawer={false} notifications={notificationsList} />);
      expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
    });

    test('Does not display notification items', () => {
      const { container } = render(<Notifications displayDrawer={false} notifications={notificationsList} />);
      const listItems = container.querySelectorAll('li');
      expect(listItems).toHaveLength(0);
    });
  });

  describe('When displayDrawer is true', () => {
    test('Display the close button', () => {
      const { container } = render(<Notifications displayDrawer={true} notifications={notificationsList} />);
      const button = container.querySelector('button[aria-label="Close"]');
      expect(button).toBeInTheDocument();
    });

    test('Display "Here is the list of notifications"', () => {
      render(<Notifications displayDrawer={true} notifications={notificationsList} />);
      expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    });

    test('Display notification items', () => {
      const { container } = render(<Notifications displayDrawer={true} notifications={notificationsList} />);
      const listItems = container.querySelectorAll('li');
      expect(listItems).toHaveLength(3);
    });
  });

  describe('When displayDrawer is true and notifications is empty', () => {
    test('Display "No new notification for now"', () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      expect(screen.getByText('No new notification for now')).toBeInTheDocument();
    });

    test('Does not display "Here is the list of notifications"', () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
    });
  });
});
