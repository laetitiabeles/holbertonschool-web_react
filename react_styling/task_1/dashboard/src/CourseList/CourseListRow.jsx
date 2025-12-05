import PropTypes from 'prop-types';

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  const headerBg = 'var(--color-table-header)';
  const rowBg = 'var(--color-table-rows)';

  const baseCellClass = 'border border-gray-400';
  const headerCellClass = `${baseCellClass} courselist-header-cell`;
  const rowCellClass = `${baseCellClass} courselist-row-cell`;

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2" className={headerCellClass}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th className={headerCellClass}>{textFirstCell}</th>
          <th className={headerCellClass}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td className={`pl-2 ${rowCellClass}`}>{textFirstCell}</td>
        <td className={`pl-2 ${rowCellClass}`}>{textSecondCell}</td>
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
