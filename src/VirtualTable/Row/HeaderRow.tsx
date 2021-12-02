import { FC } from 'react'
import { Column } from '../interface'
import HeaderCell from '../Cell/HeaderCell'
import styles from './header.module.css'

interface IProps {
  columns: Array<Column<any>>
}

const HeaderRow: FC<IProps> = ({ columns }) => {
  return (
    <div className={styles.header}>
      {
        columns.map(col => <HeaderCell key={col.dataIndex} column={col} />)
      }
    </div>
  )
}

export default HeaderRow;
