import PropTypes from 'prop-types';

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  const headerBg = 'var(--color-table-header)';
  const rowBg = 'var(--color-table-rows)';

  const rowStyle = {
    backgroundColor: isHeader ? headerBg : rowBg,
    opacity: isHeader ? 0.66 : 0.45,
  };

  const cellClass = 'border border-gray-400';

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={rowStyle}>
          <th colSpan="2" className={cellClass}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={rowStyle}>
          <th className={cellClass}>{textFirstCell}</th>
          <th className={cellClass}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={rowStyle}>
        <td className="pl-2 border border-gray-400">{textFirstCell}</td>
        <td className="pl-2 border border-gray-400">{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
