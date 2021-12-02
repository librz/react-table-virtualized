import { CSSProperties, FC } from 'react'
import { CELL_CLASSANME, CELL_PADDING_HORIZONTAL } from '../interface'
import { Column } from '../interface'

/* normal cell */
export interface CellProps {
  column: Column<any>;
}

const Cell: FC<CellProps> = ({ children, column }) => {

  /* derived state */

  const { flexGrow, flexBasis } = column;

  // if flexGrow is not provided, calculate it based on flexBasis
  const grow = flexGrow ?? Math.ceil(flexBasis / 100); 

  const cellStyles: CSSProperties =  {
     flex: `${grow} 0 ${flexBasis}px`,
     height: "inherit",
     display: "flex",
     alignItems: "center",
     padding: `0px ${CELL_PADDING_HORIZONTAL}px`,
     fontSize: 16,
     cursor: "pointer",
  };

  /* render */

  const className = column.className ? `${column.className} ${CELL_CLASSANME}` : CELL_CLASSANME;

  return (
    <div className={className} style={cellStyles}>
      {children}
    </div>
  )
}

export default Cell;
