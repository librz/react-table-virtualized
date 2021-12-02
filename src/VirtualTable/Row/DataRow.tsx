import { FC, CSSProperties } from 'react'
import DataCell from '../Cell/DataCell';
import { Column } from '../interface';

interface IProps {
  columns: Array<Column<any>>,
  record: any,
  index: number
}

const DataRow: FC<IProps> = ({ record, columns }) => {

  const rowStyle: CSSProperties = {
    display: "flex",
    // width: "fit-content",
  }
  
  return (
    <div style={rowStyle}>
      {
        columns.map((col, index) => {
          const val = record[col.dataIndex];
          return (
            <DataCell key={index} column={col}>
              {col.render ? col.render(val, record, index) : val}
            </DataCell>
          )
        })
      }
    </div>
  )
}

export default DataRow;
