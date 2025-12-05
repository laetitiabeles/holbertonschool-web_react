import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    const colorVar = type === 'urgent' ? 'var(--urgent-notification-item)' : 'var(--default-notification-item)';
    
    if (html) {
      return (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          className="p-1.5"
          style={{ color: colorVar }}
          onClick={() => markAsRead(id)}
        />
      );
    }
    
    return (
      <li 
        data-notification-type={type} 
        className="p-1.5"
        style={{ color: colorVar }}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: '',
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
