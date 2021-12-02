import { ReactNode } from 'react'

export interface Column<T> {
  dataIndex: string;
  title: ReactNode;
  flexBasis: number;
  flexGrow?: number;
  sorter?: (a: T, b: T) => number;
  render: (value: any, record: T, index: number) => ReactNode; // todo: define type of value based on T & dataIndex
  className?: string;
}

export type TableSize = "compact" | "loose";

export const CELL_PADDING_HORIZONTAL: number = 6;
export const CELL_CLASSANME = "cell";
export const ROW_CLASSNAME = "row";

export type ISortOrder = "ascending" | "descending";

export interface ISortBy {
  column: Column<any>;
  order: ISortOrder;
}

export function getColsWidth(cols: Column<any> []) {
  return cols.reduce((acc, cur) => acc += Number(cur.flexBasis), 0);
}

export function getMaxContentWidth(
  width: number,
  padding = { left: CELL_PADDING_HORIZONTAL, right: CELL_PADDING_HORIZONTAL },
  borderWidth = 1
) {
  // box model: border box
  return width - padding.left - padding.right - 2 * borderWidth
}