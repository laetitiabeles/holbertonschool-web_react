import PropTypes from 'prop-types';

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  const headerBg = 'var(--color-table-header)';
  const rowBg = 'var(--color-table-rows)';

  const cellStyle = {
    backgroundColor: isHeader ? headerBg : rowBg,
    opacity: isHeader ? 0.66 : 0.45,
  };

  const cellClass = 'border border-gray-400';

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2" className={cellClass} style={cellStyle}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th className={cellClass} style={cellStyle}>{textFirstCell}</th>
          <th className={cellClass} style={cellStyle}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td className="pl-2 border border-gray-400" style={cellStyle}>{textFirstCell}</td>
        <td className="pl-2 border border-gray-400" style={cellStyle}>{textSecondCell}</td>
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
