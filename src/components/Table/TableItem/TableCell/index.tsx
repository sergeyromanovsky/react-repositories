import React from 'react';
import { Cell } from './styled';

interface IProps {
  children: React.ReactNode;
}

function TableCell({ children }: IProps) {
  return <Cell>{children}</Cell>;
}

export default TableCell;
