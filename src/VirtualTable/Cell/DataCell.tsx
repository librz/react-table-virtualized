import { FC, CSSProperties } from 'react'
import { Column } from '../interface';

interface IProps {
  column: Column<any>
}

const DataCell: FC<IProps> = ({ column, children }) => {
  const cellStyle: CSSProperties = {
    backgroundColor: "#fff",
    padding: "4px 6px",
    fontSize: 16,
    // border: "1px solid blue",
    borderCollapse: "collapse",
    flexBasis: column.flexBasis,
    flexGrow: column.flexGrow ?? Math.round(column.flexBasis / 100),
    flexShrink: 0 // do not shrink
  }
  return (
    <div style={cellStyle}>
      {children}
    </div>
  )
}

export default DataCell;
