import { ReactNode } from 'react'

export interface Column<T> {
  dataIndex: string;
  title: ReactNode;
  flexBasis: number;
  flexGrow?: number;
  render?: (value: any, record: T, index: number) => ReactNode; // todo: define type of value based on T & dataIndex
}