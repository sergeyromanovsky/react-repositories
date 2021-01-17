import React from 'react';
import { Wrapper } from './styled';
import Item from './Item';

function TableHeader() {
  return (
    <Wrapper>
      <Item text='name' />
      <Item text='🌟 stars' />
      <Item text='🍴 forks' />
    </Wrapper>
  );
}

export default TableHeader;
