import { CSSProperties, FC } from 'react'
import { Column } from '../interface'


interface IProps {
  column: Column<any>
}

const HeaderCell: FC<IProps> = ({ column }) => {
  const cellStyle: CSSProperties = {
    backgroundColor: "whitesmoke", 
    padding: "4px 6px",
    fontSize: 16, 
    // border: "1px solid silver", 
    borderCollapse: "collapse",
    flexBasis: column.flexBasis,
    flexGrow: column.flexGrow ?? Math.round(column.flexBasis / 100),
    flexShrink: 0 // do not shrink
  }
  return (
    <div style={cellStyle}>
      {column.title}
    </div>
  )
}

export default HeaderCell;